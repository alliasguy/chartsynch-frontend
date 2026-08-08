import React from 'react';
import './AccountCredentials.css';
import { FiCopy, FiServer, FiUser, FiLock } from 'react-icons/fi';
import Swal from 'sweetalert2';

const AccountCredentials = ({ userData }) => {
    // Styling helper for copy feedback
    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
        });
        Toast.fire({
            icon: 'success',
            title: `${label} copied!`,
        });
    };

    if (!userData || !userData.tradingLogin) return null;

    return (
        <div className="credentials-card">
            <div className="credentials-header">
                <FiServer className="credentials-icon" />
                <h3>MT4/MT5 Trading Credentials</h3>
            </div>

            <div className="credentials-grid">

                {/* Server */}
                <div className="credential-item">
                    <span className="credential-label">Server</span>
                    <div className="credential-value-box">
                        <span>{userData.tradingServer || 'Atlas-Demo'}</span>
                        <FiCopy
                            className="copy-icon"
                            onClick={() => copyToClipboard(userData.tradingServer || 'Atlas-Demo', 'Server')}
                        />
                    </div>
                </div>

                {/* Login ID */}
                <div className="credential-item">
                    <span className="credential-label">Login ID</span>
                    <div className="credential-value-box">
                        <span>{userData.tradingLogin}</span>
                        <FiCopy
                            className="copy-icon"
                            onClick={() => copyToClipboard(userData.tradingLogin, 'Login ID')}
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="credential-item">
                    <span className="credential-label">Password</span>
                    <div className="credential-value-box">
                        <span>{userData.tradingPassword}</span>
                        <FiCopy
                            className="copy-icon"
                            onClick={() => copyToClipboard(userData.tradingPassword, 'Password')}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountCredentials;
