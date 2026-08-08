import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// UX-layer guard only - stops an unauthenticated user from seeing a
// protected page flash before redirecting. Every protected endpoint still
// independently verifies the token server-side; that's the real boundary.
const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default RequireAuth
