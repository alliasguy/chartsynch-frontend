import React from 'react'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import './userdashboardtraders.css'
import Loader from '../Loader'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt, FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCandlestickChart } from "react-icons/md";
import { MdOutlineShowChart } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Swal from 'sweetalert2'
import MobileDropdown from '../MobileDropdown'
import CopyModal from '../CopyModal'
import { getData as getUserData, copytrade, stopcopytrade } from '../../api/user'
import { fetchTraders as fetchTradersRequest } from '../../api/trader'
import { useAuth } from '../../context/AuthContext'
const UserdashboardTraders = () => {
  const [loader, setLoader] = useState(false)
  const [showTrader, setShowTrader] = useState(false)
  const [activeTrader, setActiveTrader] = useState({})
  const [showMobileDropdown, setShowMobileDropdown] = useState(false)
  const [search, setSearch] = useState("");
  const [traders, setTraders] = useState([])

  // Modal State
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [selectedTraderForCopy, setSelectedTraderForCopy] = useState(null);

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

  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useAuth()
  const getData = async () => {
    try {
      setLoader(true);

      if (!isAuthenticated) {
        navigate('/login');
        return;
      }

      const data = await getUserData();

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

  const fetchTraders = async () => {
    const res = await fetchTradersRequest()
    setLoader(false)
    if (res.status === 200) {
      setTraders(res.traders)
    }
    else {
      setTraders([])
    }
  }

  useEffect(() => {
    getData();
    fetchTraders()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, isAuthenticated])



  /* 
     Legacy single-trader logic removed. 
     We now rely on userData.subscriptions for the "Active Portfolio".
     The 'myTrader' view is replaced by the portfolio list.
  */


  //filtered version of traders array

  const filteredTraders = traders.filter(
    (trader) =>
      trader.firstname.toLowerCase().includes(search.toLowerCase()) ||
      trader.lastname.toLowerCase().includes(search.toLowerCase())
  );



  const openCopyModal = (trader) => {
    setSelectedTraderForCopy(trader);
    setShowCopyModal(true);
  }

  const handleCopyConfirm = async (amount) => {
    setShowCopyModal(false);
    if (!selectedTraderForCopy) return;

    await copyTrade(selectedTraderForCopy, amount);
  }

  const copyTrade = async (trader, amount) => {
    // Amount validation already done in Modal
    setLoader(true)
    const res = await copytrade({
      traderId: trader._id,
      amount: amount
    })

    if (res.status === 200) {
      Toast.fire({
        icon: 'success',
        title: `${res.message}`,
      });
      getData();
      setLoader(false)
    }
    else {
      Toast.fire({
        icon: 'error',
        title: `${res.message}`,
      });
      getData();
      setLoader(false)
    }
  }

  const stopcopyTrade = async (trader) => {

    setLoader(true)
    const res = await stopcopytrade({
      traderId: trader._id
    })


    if (res.status === 200) {
      Toast.fire({
        icon: 'success',
        title: `${res.message}`,
      });

      getData();
      setLoader(false)
    }
    else {
      Toast.fire({
        icon: 'error',
        title: `${res.message}`,
      });
      getData();
      setLoader(false)
    }
  }

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
        {showCopyModal && selectedTraderForCopy && (
          <CopyModal
            trader={selectedTraderForCopy}
            balance={userData.funded}
            onClose={() => setShowCopyModal(false)}
            onConfirm={handleCopyConfirm}
          />
        )}

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
        {
          showTrader && activeTrader ?
            <div className="trader-profile-page">
              <div className="trader-page-close-btn" onClick={() => setShowTrader(false)}>
                <IoIosArrowBack />
              </div>
              <div className="trader-profile-container">
                <div className="trader-profile-card">
                  <div className="trader-card-header">
                    <div className="trader-card-image-container">
                      <img src={`${activeTrader.traderImage}`} alt="" className='trader-card-image' />
                    </div>
                    <div className="trader-card-text-container">
                      <h3 className="trader-name">{activeTrader.firstname}</h3>
                      <p className="trader-description">{activeTrader.lastname}</p>
                    </div>
                  </div>
                  <div className="trader-perfomance-container">
                    <div className="trader-performance">
                      <div className="trader-performance-item">
                        <p className="performance-label">Win Rate</p>
                        <p className="performance-value"><MdCandlestickChart /> {activeTrader.profitrate}%</p>
                      </div>
                      <div className="trader-performance-item">
                        <p className="performance-label">Average Return</p>
                        <p className="performance-value"><MdOutlineShowChart /> {activeTrader.averagereturn}</p>
                      </div>
                      <div className="trader-performance-item">
                        <p className="performance-label">followers </p>
                        <p className="performance-value"> {activeTrader.followers}</p>
                      </div>
                      <div className="trader-performance-item">
                        <p className="performance-label">minimum Risk/Reward Ratio </p>
                        <p className="performance-value">{activeTrader.rrRatio}</p>
                      </div>
                      <div className="trader-performance-item">
                        <p className="performance-label">minimum Trading Capital </p>
                        <p className="performance-value">{activeTrader.minimumcapital}</p>
                      </div>
                    </div>
                    <div className="trader-performance-btn-container">
                      <button className='trader-card-btn' onClick={() => openCopyModal(activeTrader)}>mirror trade</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> : ''
        }
        {
          !showTrader &&
          <section className='trader-show-case-wrapper'>
            <MobileDropdown showStatus={showMobileDropdown} closeMenu={closeMobileMenu} />
            <div className="traders-showcase">
              <h2 className="traders-showcase-header">expert traders</h2>
              <p>choose from the list of our expert traders. Any trader you select would trade and manage your portfolio.</p>
            </div>
            {/* Portfolio Section */}
            {userData.subscriptions && userData.subscriptions.length > 0 &&
              <div className="active-trader-container" >
                <div className="videoframe-text-container treader-header">
                  <h1>Your Active <span className="highlight">Portfolio</span></h1>
                </div>
                {userData.subscriptions.map((sub) => {
                  const trader = traders.find(t => t._id === sub.traderId);
                  if (!trader) return null;

                  return (
                    <div key={sub._id} className="traders-card active-trader-card">
                      <div className="trader-card-header active-trader-card-header">
                        <div className="trader-card-image-container">
                          <img src={`${trader.traderImage}`} alt="" className='trader-card-image' />
                        </div>
                        <div className="trader-card-text-container">
                          <h3 className="trader-name">{trader.firstname}</h3>
                          <p className="trader-description">Allocated: ${sub.allocatedAmount}</p>
                          <p className="trader-description">Equity: ${sub.currentEquity.toFixed(2)}</p>
                          <button onClick={() => stopcopyTrade(trader)}>stop mirroring</button>
                        </div>
                      </div>
                      <div className="trader-perfomance-container">
                        <div className="trader-performance">
                          <div className="trader-performance-item">
                            <p className="performance-label">Win Rate</p>
                            <p className="performance-value"><MdCandlestickChart /> {trader.profitrate}%</p>
                          </div>
                          <div className="trader-performance-item">
                            <p className="performance-label">Return</p>
                            <p className="performance-value"><MdOutlineShowChart /> {
                              ((sub.currentEquity - sub.allocatedAmount) / sub.allocatedAmount * 100).toFixed(2)
                            }%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            }

            <div className="traders-section">
              <div className="videoframe-text-container treader-header">
                <h1>choose a <span className="highlight">trader</span></h1>
                <div className="search-input-container">
                  <span className='search-btn'><FiSearch /></span>
                  <input
                    type="text"
                    placeholder="search for a trader"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="traders-card-container">
                {
                  filteredTraders.map(trader =>
                    <div className="traders-card">
                      <div className="trader-card-header">
                        <div className="trader-card-image-container">
                          <img src={`${trader.traderImage}`} alt="" className='trader-card-image' />
                        </div>
                        <div className="trader-card-text-container">
                          <h3 className="trader-name">{trader.firstname}</h3>
                          <p className="trader-description">{trader.lastname}</p>
                        </div>
                      </div>
                      <div className="trader-perfomance-container">
                        <div className="trader-performance">
                          <div className="trader-performance-item">
                            <p className="performance-label">Win Rate</p>
                            <p className="performance-value"><MdCandlestickChart /> {trader.profitrate}%</p>
                          </div>
                          <div className="trader-performance-item">
                            <p className="performance-label">Average Return</p>
                            <p className="performance-value"><MdOutlineShowChart /> {trader.averagereturn}</p>
                          </div>
                          <div className="trader-performance-item">
                            <p className="performance-label">Minimum trading capital</p>
                            <p className="performance-value"><MdOutlineShowChart /> ${trader.minimumcapital}</p>
                          </div>
                        </div>
                        <div className="trader-performance-btn-container">
                          <button className='trader-card-btn' onClick={() => {
                            setActiveTrader(
                              {
                                firstname: trader.firstname,
                                lastname: trader.lastname,
                                profitrate: trader.profitrate,
                                averagereturn: trader.averagereturn,
                                followers: trader.followers,
                                rrRatio: trader.rrRatio,
                                nationality: trader.nationality,
                                minimumcapital: trader.minimumcapital,
                                traderImage: trader.traderImage,
                                tradehistory: trader.tradehistory
                              })
                            setShowTrader(true)
                          }}>view profile</button>
                          <button className='trader-card-btn' onClick={() => openCopyModal(trader)}>mirror trade</button>
                        </div>
                      </div>
                    </div>
                  )
                }

              </div>
            </div>
          </section>
        }
      </section>
    </main>
  )
}

export default UserdashboardTraders