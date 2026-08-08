import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiPassExpiredLine } from "react-icons/ri";
import { verifyEmailLink } from '../api/auth'

const VerifyEmail = () => {
  const [loader, setLoader] = useState(true)
  const params = useParams()

  const [validUrl, setValidUrl] = useState()
  useEffect(() => {
    setLoader(true)
    const verifyEmailUrl = async () => {
      try {
        const res = await verifyEmailLink(params.id, params.token)
        setLoader(false)
        if (res.status === 200) {
          setValidUrl(true)
        }

      } catch (error) {
        console.error(error)
        setValidUrl(false)
        setLoader(false)
      }
    }
    verifyEmailUrl()
  }, [params])
  return (
    <>
      {

        loader && <Loader />
      }
      {
        validUrl ? <section className='verifyPageSection'>
          <div className="verifyPageTextWrapper">
            <IoMdCheckmarkCircleOutline />
            <h1>Email successfully verified</h1>
            <p>Congrats your Email has been successfully verified, click to button below to login</p>
            <Link
              to='/login'
            >
              login
            </Link>
          </div>
        </section> :
          <section className='verifyPageSection'>
            <div className="verifyPageTextWrapper">
              <RiPassExpiredLine />
              <h1>sorry, Link has expired</h1>
              <p>Sorry your email verification link has expired</p>
              <Link
                to='/'
              >
                Home
              </Link>
            </div>
          </section>
      }
    </>
  )
}

export default VerifyEmail