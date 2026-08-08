import React, { useState } from 'react';
import './CopyModal.css';
import { IoMdClose } from "react-icons/io";

const CopyModal = ({ trader, onClose, onConfirm, balance }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        const numAmount = parseFloat(amount);
        if (!amount || isNaN(numAmount) || numAmount <= 0) {
            setError('Please enter a valid positive amount.');
            return;
        }
        if (numAmount < trader.minimumcapital) {
            setError(`Minimum investment for this trader is $${trader.minimumcapital}`);
            return;
        }
        if (numAmount > balance) {
            setError('Insufficient funds.');
            return;
        }
        onConfirm(numAmount);
    };

    return (
        <div className="mirror-modal-overlay">
            <div className="mirror-modal-container">
                <div className="mirror-modal-header">
                    <h3>Mirror {trader.firstname} {trader.lastname}</h3>
                    <span onClick={onClose}><IoMdClose /></span>
                </div>
                <div className="mirror-modal-body">
                    <p className="mirror-modal-info">
                        Allocate funds to mirror trades from this trader.
                        Profits will be proportional to your allocation.
                    </p>
                    <div className="mirror-modal-balance">
                        <span>Available Balance:</span>
                        <span>${balance?.toLocaleString()}</span>
                    </div>

                    <div className="input-group">
                        <label>Amount to Invest ($)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                                setError('');
                            }}
                            placeholder={`Min: $${trader.minimumcapital}`}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}

                    <button className="confirm-mirror-btn" onClick={handleSubmit}>
                        Confirm & Mirror
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CopyModal;
