import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Signup from './pages/Signup';
import Userdashboard from './pages/Userdashboard'
import Userdashboardfundaccount from './components/userdashboardfundaccount/Userdashboardfundaccount'
import Userdashboardwithdraw from './components/userdashboardwithdraw/Userdashboardwithdraw';
import Userdashboardreferrals from './components/userdashboardreferrals/Userdashboardreferrals';
import Userdashboardplans from './components/userdashboardplans/Userdashboardplans';
import Userdashboardtransactions from './components/userdashboardtransactions/Userdashboardtransactions';
import Investments from './components/invesments/Investments';
import Profile from './components/profile/Profile'
import VerifyEmail from './pages/VerifyEmail';
import WithdrawalLogs from './components/WithdrawalLogs';
import Checkout from './components/Checkout';
import Admindashboard from './components/admindashboard/Admindashboard';
import DepositHistory from './components/deposit/DepositHistory';
import Aboutpage from './pages/Aboutpage';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Risk from './pages/Risk';

import Policy from './pages/Policy';
import './App.css'

import Forex from './pages/forex/Forex';
import Indices from './pages/indices/Indices';
import Futures from './pages/futures/Futures';
import Stocks from './pages/stocks/Stocks';
import News from './pages/news/News';
import TechnicalAnalysisPage from './pages/technicalAnalysis/TechnicalAnalysisPage'
import Heatmaps from './pages/heatmaps/Heatmaps';
import Watchlist from './pages/watchlist/Watchlist';
import Team from './pages/team/Team'
import UserdashboardCopytrade from './components/userdashboardCopytrade/UserdashboardCopytrade';
import UserdashboardKyc from './components/userdashboardKyc/UserdashboardKyc';
import UserdashboardLiveTrading from './components/userdashboardLiveTrading/UserdashboardLiveTrading';
import UserdashboardRanking from './components/userdashboardRanking/UserdashboardRanking';
import UserdashboardTraders from './components/userdashboardTraders/UserdashboardTraders';
import Verify from './pages/verifyPage/Verify';
import PasswordReset from './components/passwordreset/PasswordReset';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import Bonds from './pages/bonds/Bonds';
import Options from './pages/options/Options';
import Commodities from './pages/commodities/Commodities';
import OtpVerification from './pages/OtpVerification';
import RequireAuth from './routes/RequireAuth';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
    // duration=1200;
  }, [])

  return (
    <>
      <AnimatePresence >
        <Router>
          <motion.div className="App"
            key={Routes.Route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            variants={{
              initialState: {
                opacity: 0,
                y: 6,
              },
              animateState: {
                opacity: 1,
                y: 0,
              },
              exitState: {
                opacity: 0,
                y: -6,
              }
            }}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<RequireAuth><Userdashboard /></RequireAuth>} />
              <Route path='/fundwallet' element={<RequireAuth><Userdashboardfundaccount /></RequireAuth>} />
              <Route path='/referrals' element={<RequireAuth><Userdashboardreferrals /></RequireAuth>} />
              <Route path='/withdraw' element={<RequireAuth><Userdashboardwithdraw /></RequireAuth>} />
              <Route path='/plans' element={<RequireAuth><Userdashboardplans /></RequireAuth>} />
              <Route path='/transactions' element={<RequireAuth><Userdashboardtransactions /></RequireAuth>} />
              <Route path='/investments' element={<RequireAuth><Investments /></RequireAuth>} />
              <Route path='/settings' element={<RequireAuth><Profile /></RequireAuth>} />
              <Route path='/user/:id' element={<VerifyEmail />} />
              <Route path='/withdrawlogs' element={<RequireAuth><WithdrawalLogs /></RequireAuth>} />
              <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
              <Route path='/admin' element={<Admindashboard />}>
              </Route>
              <Route path='/deposit' element={<RequireAuth><DepositHistory /></RequireAuth>} />
              <Route path='/about' element={<Aboutpage />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/privacy' element={<Policy />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/risk' element={<Risk />} />
              <Route path='/forex' element={<Forex />} />
              <Route path='/futures' element={<Futures />} />
              <Route path='/indices' element={<Indices />} />
              <Route path='/stocks' element={<Stocks />} />
              <Route path='/news' element={<News />} />
              <Route path='/technical-analysis' element={<TechnicalAnalysisPage />} />
              <Route path='/heatmaps' element={<Heatmaps />} />
              <Route path='/watchlists' element={<Watchlist />} />
              <Route path='/team' element={<Team />} />
              <Route path='/usercopytrade' element={<RequireAuth><UserdashboardCopytrade /></RequireAuth>} />
              <Route path='/traders' element={<RequireAuth><UserdashboardTraders /></RequireAuth>} />
              <Route path='/live-trading' element={<RequireAuth><UserdashboardLiveTrading /></RequireAuth>} />
              <Route path='/ranking' element={<RequireAuth><UserdashboardRanking /></RequireAuth>} />
              <Route path='/kyc' element={<RequireAuth><UserdashboardKyc /></RequireAuth>} />
              <Route path='/verify' element={<Verify />} />
              <Route path=':id/verify/:token' element={<VerifyEmail />} />
              <Route path='/passwordreset' element={<ForgotPassword />} />
              <Route path='/resetpassword/:email/:token' element={<PasswordReset />} />
              <Route path='/bonds' element={<Bonds />} />
              <Route path='/options' element={<Options />} />
              <Route path='/commodities' element={<Commodities />} />
              <Route path='/verify-otp' element={<OtpVerification />} />
            </Routes>
          </motion.div>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App
