import React from 'react'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import Loader from '../Loader'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import './userdashboardcopytrade.css'
import MobileDropdown from '../MobileDropdown'
import { getData } from '../../api/user'
import { useAuth } from '../../context/AuthContext'

const UserdashboardCopytrade = () => {
  const [loader, setLoader] = useState(false)
  const [userData, setUserData] = useState()
  const [showMobileDropdown, setShowMobileDropdown] = useState(false)
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useAuth()


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);

        if (!isAuthenticated) {
          navigate('/login');
          return;
        }

        const data = await getData();

        // Handle errors from the API
        if (data.status === 'error') {
          logout(); // Clear invalid token
          navigate('/login');
        } else {
          setUserData(data); // Set user data
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login'); // Navigate to login on failure
      } finally {
        setLoader(false); // Stop loader
      }
    };

    fetchData();
  }, [navigate, isAuthenticated, logout]);

  const closeMobileMenu = () => {
    setShowMobileDropdown(false)
  }

  return (
    <main className='homewrapper'>
      {
        loader &&
        <Loader />
      }
      <Userdashboardheader />
      <section className='dashboardhomepage'>


        <div className="dashboardheaderwrapper">
          <div className="header-notification-icon-container">
            <IoMdNotifications />
          </div>
          <div className="header-username-container">
            <h3>Hi, {userData ? userData.firstname : ''}</h3>
          </div>
          <div className="header-userprofile-container">
            <div className="user-p-icon-container">
              <FaUserAlt />
            </div>
            <div className="user-p-drop-icon" onClick={() => { setShowMobileDropdown(!showMobileDropdown); }
            }>
              <FaAngleDown />
            </div>

          </div>
        </div>
        {userData && userData.trades.length !== 0 ?
          <div className="page-swiper-wrapper trans-page">
            <MobileDropdown showStatus={showMobileDropdown} closeMenu={closeMobileMenu} />
            <div className="floating-btn trans-page-float" onClick={() => {
              navigate('/dashboard')
            }}>
              <AiOutlineArrowLeft />
            </div>
            <div className="page-header">
              <h3>checkout your trade logs</h3>
              <h2>trade logs</h2>
              <p>we keep track of all the trades taken by your trader</p>
            </div>
            <div className="transaction-container no-ref">
              <table>
                <thead>
                  <tr>
                    <td>trade pair</td>
                    <td>amount</td>
                    <td>type</td>
                    <td>date</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData.trades.map(refer =>
                      <tr className='tr'>
                        <td>{refer.pair}</td>
                        <td>$ {refer.amount} USD</td>
                        <td className={`${refer.tradeType === 'profit' ? 'profit' : 'loss'}`}> {refer.tradeType}</td>
                        <td>{refer.date}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
          :
          <div className="empty-page">
            <MobileDropdown showStatus={showMobileDropdown} closeMenu={closeMobileMenu} />
            <img src="/preview.gif" alt="" className='empty-img dash-empty-img' />
            <p>Your Trader has not placed any trades yet. Trades taken by your trader would be displayed here when available.</p>
            <Link to='/fundwallet'>deposit</Link>
          </div>
        }
      </section>
    </main>
  )
}

export default UserdashboardCopytrade