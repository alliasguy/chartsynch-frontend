import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './userdashboardwithdraw/userdashboardwithdraw.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Loader from './Loader'
import { withdraw as withdrawRequest } from '../api/user'
import { sendEmailJS, EMAILJS_SERVICE_ID, EMAILJS_USER_ID, EMAILJS_GENERIC_TEMPLATE_ID } from '../config/thirdParty'
const WithdrawReview = ({ Active, withdrawAmount, closepage, funded }) => {
    const [active] = useState(Active)
    const [wallet, setWallet] = useState()
    const [amount] = useState(withdrawAmount)
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if (Active === undefined) {
            navigate('/fundwallet')
        }
    }, [Active, navigate])

    // sweet Alert code 

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

    const withdraw = async () => {
        setLoader(true)
        const res = await withdrawRequest({
            wallet: wallet,
            WithdrawAmount: amount,
            method: active.method
        })
        setLoader(false)
        if (res.status === 'ok') {
            Toast.fire({
                icon: 'success',
                title: `You have successfully placed your withdrawal of ${res.withdraw}. kindly wait for few minutes to be approved by management,Thanks!`
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
                    'subject': `${res.subject}`
                }
            })
            setWallet('')
        }

        else {
            Toast.fire({
                icon: 'warning',
                title: `${res.withdrawMessage}`
            })
            sendEmailJS({
                serviceId: EMAILJS_SERVICE_ID,
                templateId: EMAILJS_GENERIC_TEMPLATE_ID,
                userId: EMAILJS_USER_ID,
                templateParams: {
                    'name': `${res.name}`,
                    'email': `${res.email}`,
                    'message': `${res.withdrawMessage}`,
                    'reply_to': `support@chartsynch.com`,
                    'subject': `${res.subject}`
                }
            })

            setWallet('')
        }
    }
    return (
        <div>
            {/* <Userdashboardheader /> */}
            {
                loader &&
                <Loader />
            }
            <div className="checkout-page">
                <div className="floating-btn" onClick={() => {
                    closepage()
                }}>
                    <AiOutlineArrowLeft />
                </div>
                <h3>Withdrawal Preview</h3>
                <p>Review withdrawal details.</p>
                <div className="withdrawal-review-container">
                    <div className="left-withdrawal-review-card">
                        <div className="review-left-card-tab">
                            <p>Current Balance: <b>{funded} USD</b></p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>Request Balance: <b>{amount ? amount : ''} USD</b></p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>Withdrawal Charge: <b>0 USD</b></p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>After Charge: <b>0 USD</b> </p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>Conversion Rate: <b>1 USD = 1 USD</b></p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>You Will Get: <b>{amount ? amount : ''} USD</b></p>
                        </div>
                        <div className="review-left-card-tab">
                            <p>Balance Will be: <b>{funded - amount} USD</b></p>
                        </div>

                    </div>
                    <div className="right-withdrawal-review-card">
                        <p>Please enter you <b>{active ? active.method : ''}</b>  Wallet address below</p>
                        <form action="" className="review-withdraw-form" onSubmit={(e) => {
                            e.preventDefault()
                            withdraw()
                        }}>
                            <label htmlFor="wallet">wallet address</label>
                            <input type="text" id='wallet' placeholder='wallet address' onChange={(e) => {
                                setWallet(e.target.value)
                            }} required value={wallet} />
                            <input type="submit" value="confirm" className='confirm-withdraw-btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawReview