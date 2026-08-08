import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showMarkets, setShowMarkets] = useState(false)
    const [showAnalytics, setShowAnalytics] = useState(false)
    const [showCompany, setShowCompany] = useState(false)


    const changeOnScroll = () => {
        if (window.scrollY >= 90) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    };
    window.addEventListener('scroll', changeOnScroll);
    const navigate = useNavigate();

    const menuItems = [
        { name: "home", path: "/", dropdown: [] },
        { name: "about", path: "/about", dropdown: [] },
        { name: "markets", path: "/markets", dropdown: ["forex", "commodities", "bonds", "options", "futures", "indices", "stocks"] },
        { name: "analytics", path: "/faq", dropdown: ["news", "technical-analysis", "heatmaps", "watchlists"] },
        { name: "company", path: "/privacy", dropdown: ["privacy"] },
    ];

    return (
        <motion.header className={`${bgColor && 'scroll-color'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65 }}
        >
            <div className="logo-container">
                <img src="/elitesynchmock9.png" alt="" className='txtlogo' />
            </div>
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className="nav-item-rel"
                            onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(index)}
                            onMouseLeave={(e) => {
                                if (!e.relatedTarget || !e.relatedTarget.closest(".drop-down-container")) {
                                    setOpenDropdown(null);
                                }
                            }}>
                            <Link to={item.path} className="nav-link-with-icon">
                                <span>{item.name}</span>
                                {item.dropdown.length > 0 && (
                                    <RiArrowDownSLine className={`nav-chevron ${openDropdown === index ? 'rotate-chevron' : ''}`} />
                                )}
                            </Link>
                            <AnimatePresence>
                                {openDropdown === index && item.dropdown.length > 0 && (
                                    <motion.div
                                        className="drop-down-container"
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        onMouseEnter={() => setOpenDropdown(index)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <div className="drop-wrapper glass-dropdown">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link key={subIndex} to={`/${subItem}`} className="dropdown-link">
                                                    <span>{subItem.replace('-', ' ')}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="sign-up-btn-container">
                <button className='login-nav-btn' onClick={() => { navigate('/login') }}><span>Login</span></button>
                <button className='signup-nav-btn' onClick={() => { navigate('/signup') }}><span>Get Started</span></button>
            </div>
            <div className="mobile-menu-container" onClick={() => { setShowModal(!showModal) }}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`overlay ${showModal ? 'showing-modal' : ''}`} >
                <div className="overlay-close-btn-container" onClick={() => setShowModal(false)}>
                    <MdClose />
                </div>
                <div className="menu-card">
                    <div className="menu-card-image-conatiner">
                        <img src="/elitesynchmock9.png" alt="" className='mobile-logo' />
                    </div>
                    <ul className="list">
                        <li className="element"><Link to='/'>home</Link></li>
                        <li className="element"><Link to='/about'>about</Link></li>
                        <div className="market-dropdown" >
                            <p onClick={() => setShowMarkets(!showMarkets)}>markets</p>
                            <div onClick={() => setShowMarkets(!showMarkets)} className={`market-dropdown-svg-container ${showMarkets && 'rotate'}`}>
                                <RiArrowDownSLine />
                            </div>
                            <div className={`market-links ${showMarkets && 'show-markets'}`}>
                                <li className="element"><Link to='/forex'>forex</Link></li>
                                <li className="element"><Link to='/commodities'>commodities</Link></li>
                                <li className="element"><Link to='/bonds'>bonds</Link></li>
                                <li className="element"><Link to='/options'>options</Link></li>
                                <li className="element"><Link to='/futures'>futures</Link></li>
                                <li className="element"><Link to='/indices'>indices</Link></li>
                                <li className="element"><Link to='/stocks'>stocks</Link></li>
                            </div>
                        </div>
                        <div className="market-dropdown" >
                            <p onClick={() => setShowAnalytics(!showAnalytics)}>analytics</p>
                            <div onClick={() => setShowAnalytics(!showAnalytics)} className={`market-dropdown-svg-container ${showAnalytics && 'rotate'}`}>
                                <RiArrowDownSLine />
                            </div>
                            <div className={`analytics-links ${showAnalytics && 'show-markets'}`}>
                                <li className="element"><Link to='/news'>news</Link></li>
                                <li className="element"><Link to='/technical-analysis'>technical analysis</Link></li>
                                <li className="element"><Link to='/heatmaps'>heatmaps</Link></li>
                                <li className="element"><Link to='/watchlists'>watchlists</Link></li>
                            </div>
                        </div>
                        <div className="market-dropdown" >
                            <p onClick={() => setShowCompany(!showCompany)}>company</p>
                            <div onClick={() => setShowCompany(!showCompany)} className={`market-dropdown-svg-container ${showCompany && 'rotate'}`}>
                                <RiArrowDownSLine />
                            </div>
                            <div className={`company-links ${showCompany && 'show-markets'}`}>
                                <li className="element"><Link to='/privacy'>privacy policy</Link></li>
                                <li className="element"><Link to='/faq'>faq</Link></li>
                            </div>
                        </div>
                        <li className="element"><Link to='/login'>login</Link></li>
                        <li className="element"><Link to='/signup'>signup</Link></li>
                    </ul>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
