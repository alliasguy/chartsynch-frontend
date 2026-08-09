import React , {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { FiAward } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { MdAddchart } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import {RiLuggageDepositLine} from 'react-icons/ri'
import {AiOutlineSetting,AiOutlineStock} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {GiReceiveMoney} from 'react-icons/gi'
import {RxDashboard} from 'react-icons/rx'
import {FaUserFriends,FaRegChartBar} from 'react-icons/fa'
import { getData } from '../api/user'
import { useAuth } from '../context/AuthContext'
const AdminHeader = ({openCreateTrader,openTraderLogs,openUsers,openSecurity}) => {
    const navigate = useNavigate()
    const [dropDown,setDropDown] = useState(false)
    const [userData, setUserData] = useState()
    const { isAuthenticated, logout: clearAuth } = useAuth()

    const logout = ()=>{
        clearAuth()
        navigate('/login')
    }
    useEffect(()=>{
        if(isAuthenticated){
            getData().then(setUserData)
        }
        else{
            navigate('/login')
        }

    },[isAuthenticated, navigate])


    const [bgColor, setBgColor] = useState(false)
    const changeOnScroll = ()=>{
        if(window.scrollY >= 50){
            setBgColor(true)
        }
        else{
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeOnScroll)
  return (
    <>
        {
            dropDown &&
            <div className="drop-down" onBlur={()=>{
                setDropDown(false)
            }}>
                <div className="dropdown-tabs" onClick={()=>{
                   setDropDown(false)
                }}>
                    <AiOutlineClose />
                    <p>close</p>
                </div>
                <div className="dropdown-header">
                    <span className="profile-pic-container">
                        {userData && userData.profilepicture !== '' ? <img src={userData.profilepicture ? userData.profilepicture : ''} alt="" /> : userData.firstname.charAt(0)} 
                    </span>
                    <span className="dropdown-user-details">
                        <p className='dropdown-name'>{userData ? userData.firstname : 'john doe'}</p>
                        <p className='dropdown-email'>{userData ? userData.email : 'johndoe#gmail.com'}</p>
                    </span>
                </div>
                
                <div className="dropdown-deposit-container">
                    <h3>total amount</h3>
                    <h2>${userData ? userData.funded : ''} USD</h2>
                    <p>referral bonus ${userData ? userData.refBonus : ''} USD</p>
                </div>
                <div className="mobile-tabs">
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/dashboard')
                }}>
                    <RxDashboard />
                    <p>dashboard</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/fundwallet')
                }}>
                    <GiReceiveMoney />
                    <p>deposit</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/plans')
                }}>
                    <AiOutlineStock />
                    <p>select plan</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/withdraw')
                }}>
                    <RiLuggageDepositLine />
                    <p>withdraw</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/referrals')
                }}>
                    <FaUserFriends />
                    <p>referral</p>
                </div>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/myprofile')
                }}>
                    <AiOutlineSetting />
                    <p>profile setting</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/myprofile')
                }}>
                    <RiLockPasswordLine />
                    <p>kyc</p>
                </div>
                
                <div className="dropdown-tabs" onClick={()=>{
                   logout()
                }}>
                    <FiLogOut />
                    <p>logout</p>
                </div>
                
            </div>
        }
        <aside className='userdashboard-sidebar'>
          <div className="dashboard-logo-container">
            <img src="/chartsynchlogo4.jpeg" alt="ChartSynch Logo" className="dashboard-logo" />
          </div>
          <ul className='dashboard-links-container'>
            <li className="dashboard-links" onClick={() => openUsers()}>
              <div className="dashboard-svg-container">
                <AiOutlineAppstoreAdd />
              </div>
              <p>Dashboard</p>
            </li>
            <li className="dashboard-links" onClick={() => openCreateTrader()}>
              <div className="dashboard-svg-container">
                <MdAddchart />
              </div>
              <p>Create Trader</p>
            </li>
            <li className="dashboard-links" onClick={() => openTraderLogs()}>
              <div className="dashboard-svg-container">
                <FaRegChartBar />
              </div>
              <p>Trader Logs</p>
            </li>
            <li className="dashboard-links" onClick={() => openSecurity()}>
              <div className="dashboard-svg-container">
                <AiOutlineSafety />
              </div>
              <p>Security</p>
            </li>
            <li className="dashboard-links" onClick={() => logout()}>
              <div className="dashboard-svg-container">
                <FiLogOut />
              </div>
              <p>Logout</p>
            </li>
          </ul>
        </aside>
    </>
  )
}

export default AdminHeader