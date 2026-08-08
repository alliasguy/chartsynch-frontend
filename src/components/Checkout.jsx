import React, { useEffect, useState } from 'react'

import DepositProof from './DepositProof'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const Checkout = ({ Active, depositAmount, closepage }) => {
    const [checkout, setCheckout] = useState(true)
    const [active] = useState(Active)
    const [deposit, setDeposit] = useState(false)
    const [amount] = useState(depositAmount)
    const navigate = useNavigate()
    useEffect(() => {
        if (Active === undefined) {
            navigate('/fundwallet')
        }
    }, [Active, navigate])
    const close = () => {
        setDeposit(false)
        setCheckout(true)
    }
    return (
        <>
            {
                checkout &&
                <div>
                    <div className="checkout-page">
                        <div className="floating-btn" onClick={() => {
                            closepage()
                        }}>
                            <AiOutlineArrowLeft />
                        </div>
                        <h3>Payment Preview</h3>
                        <p>Review withdrawal details.</p>
                        <div className="checkout-info-container">
                            <img src={Active.image} alt="" />
                            <div className="info-pallets">
                                <p>amount to deposit: {depositAmount} USD</p>
                            </div>
                            <div className="info-pallets">
                                <p>charge: 0 USD</p>
                            </div>
                            <div className="info-pallets">
                                <p>minimum deposit: {Active.min} USD</p>
                            </div>
                            <div className="info-pallets">
                                <p>conversion rate: 1USD = 1USD {Active.min}</p>
                            </div>
                            <div className="info-pallets">
                                <p>in USD {depositAmount}</p>
                            </div>
                            <div className="uiverse" onClick={() => {
                                setDeposit(true)
                                setCheckout(false)
                            }} >
                                <span className="tooltip">continue to submit</span>
                                <span >
                                    confirm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                deposit &&
                <DepositProof amount={amount} active={active} close={close} />
            }
        </>

    )
}

export default Checkout