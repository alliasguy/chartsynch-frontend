import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

const Terms = () => {
    return (
        <>
            <main className='policy-landpage'>
                <Header />
                <div className="policy-container">
                    <div className="policy-text-container">
                        <h2>Terms of Service</h2>
                        <p>
                            Welcome to ChartSynch. By accessing our website and using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
                        </p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By registering for an account or using any part of the ChartSynch platform, you agree to comply with these Terms of Service. If you do not agree, you must not use our services.
                        </p>

                        <h3>2. Services Provided</h3>
                        <p>
                            ChartSynch provides a copytrading ecosystem that allows users to mirror the trades of verified master traders. We do not provide personalized financial advice. All trading decisions are made automatically based on your settings and the traders you choose to copy.
                        </p>

                        <h3>3. User Responsibilities</h3>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. You acknowledge that trading involves risk and that you are solely responsible for any losses incurred.
                        </p>

                        <h3>4. Risk Acknowledgment</h3>
                        <p>
                            You understand that financial trading, including copytrading, carries a high level of risk. Past performance of any trader is not indicative of future results. You should only trade with capital you can afford to lose.
                        </p>

                        <h3>5. Termination</h3>
                        <p>
                            We reserve the right to suspend or terminate your account at our sole discretion if we believe you have violated these Terms or engaged in fraudulent activity.
                        </p>

                        <h3>6. Modifications</h3>
                        <p>
                            ChartSynch reserves the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.
                        </p>

                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions regarding these Terms, please contact us at support@chartsynch.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Terms
