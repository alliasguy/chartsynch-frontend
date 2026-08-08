import React, { useState, useRef } from 'react'
import { MdOutlineContentCopy, MdOutlineDone } from 'react-icons/md'
import { BsImageFill } from 'react-icons/bs'
import { BsUpload } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { FiLink } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Loader from './Loader'
import { sendProof } from '../api/user'
import { sendEmailJS, EMAILJS_SERVICE_ID, EMAILJS_USER_ID, EMAILJS_GENERIC_TEMPLATE_ID, CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET } from '../config/thirdParty'
const DepositProof = ({ amount, active, close }) => {

    const [Active] = useState(active)
    const [clipBoard, setClipBoard] = useState(false)
    const [showImage, setShowImage] = useState()
    const clipRef = useRef(null)
    const [modal, setModal] = useState(false)
    const [loader, setLoader] = useState(false)

    // copy to clipboard function starts here 
    const copy = () => {
        navigator.clipboard.writeText(clipRef.current.value)
    }

    // upload proof image code starts here 

    const uploadProof = async (file) => {
        setModal(true)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        const req = await fetch(CLOUDINARY_UPLOAD_URL,
            {
                method: 'POST',
                body: formData,
            }
        )
        const res = await req.json()
        if (res) {
            setShowImage(res.secure_url)
            setModal(false)
        }
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    // send proof function starts here 

    const sendProofRequest = async () => {
        setLoader(true)
        const res = await sendProof({
            amount: amount,
            method: Active.method
        })

        if (res.status === 200) {
            setLoader(false)
            Toast.fire({
                icon: 'congrats',
                title: `You have successfully placed a deposit of ${amount}`
            })

            sendEmailJS({
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_GENERIC_TEMPLATE_ID,
                userId: EMAILJS_USER_ID,
                templateParams: {
                    'name': `${res.name}`,
                    'email': `${res.email}`,
                    'message': `${res.message}`,
                    'reply_to': `support@chartsynch.com`,
                    'subject': `${res.subject}`
                }
            })
            sendEmailJS({
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_GENERIC_TEMPLATE_ID,
                userId: EMAILJS_USER_ID,
                templateParams: {
                    'name': `Bro`,
                    'email': `support@chartsynch.com`,
                    'message': `${res.adminMessage}`,
                    'reply_to': `${res.email}`,
                    'subject': `${res.adminSubject}`
                }
            })
        }
        else if (res.status === 500) {
            Toast.fire({
                icon: 'error',
                title: 'user does not exist'
            })
        }
        else {
            Toast.fire({
                icon: 'error',
                title: 'internal server error'
            })
        }
    }

    return (
        <div>
            {
                loader &&
                <Loader />
            }
            {/* <Userdashboardheader /> */}
            <div className="checkout-page">
                <div className="floating-btn" onClick={() => {
                    close()
                }}>
                    <AiOutlineArrowLeft />
                </div>
                <h3>deposit confirm</h3>
                <p>confirm your deposit by uploading a proof of payment, after paying</p>
                <div className="checkout-info-container">
                    <p>You have requested <span className='bold'>{amount} USD</span> , Please pay <span className='bold'>{amount} USD</span>  for successful payment</p>
                    <h3>Please copy Link to copy wallet address and make payment</h3>
                    <div className="click-to-copy-container">
                        <span className='clipboard-btn'>
                            <FiLink />
                        </span>
                        <input type="text" value={Active.wallet} ref={clipRef} />
                        <span className={`clipboard-btn ${clipBoard ? <MdOutlineDone /> : ''}`} onClick={() => {
                            copy()
                            setClipBoard(!clipBoard)
                        }}>
                            {
                                clipBoard ?
                                    <MdOutlineDone /> : <MdOutlineContentCopy />
                            }
                        </span>
                    </div>
                    <div className="proof-container">
                        <form action="" className='proof-form' onSubmit={(e) => {
                            e.preventDefault()
                            sendProofRequest()
                        }}>
                            <p>upload proof of payment</p>
                            <div className="proof-img-container">
                                {
                                    modal && <div className="ping-container"><div class="ping"></div></div>
                                }
                                {
                                    showImage === undefined && !modal ? <BsImageFill /> : <img src={`${showImage}`} alt="" className='proof-image' />
                                }
                            </div>
                            <label htmlFor="proof-img" className='proof-label'>
                                <BsUpload />
                                <input type="file" accept='.jpg, .png, .svg, .webp, .jpeg' name="images" id="proof-img" className='proof-input' required onChange={(e) => {
                                    const image = e.target.files[0]
                                    uploadProof(image)
                                }} />
                            </label>
                            <input type="submit" value="send proof" className='proof-submit-btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositProof