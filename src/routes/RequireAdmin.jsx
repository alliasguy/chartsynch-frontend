import React from 'react'
import { useAuth } from '../context/AuthContext'

// UX-layer guard only - real authorization happens server-side on every
// admin-only endpoint via verifyAdminToken. This just decides whether to
// show the admin dashboard shell or fall back to the login form.
const RequireAdmin = ({ children, fallback }) => {
  const { isAdmin } = useAuth()
  if (!isAdmin) {
    return fallback
  }
  return children
}

export default RequireAdmin
