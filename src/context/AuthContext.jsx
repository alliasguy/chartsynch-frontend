import React, { createContext, useContext, useState, useCallback } from 'react'
import { getToken, setToken, clearToken, getTokenClaims, isTokenExpired } from '../auth/tokenStorage'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(getToken())

  const login = useCallback((newToken) => {
    setToken(newToken)
    setTokenState(newToken)
  }, [])

  const logout = useCallback(() => {
    clearToken()
    setTokenState(null)
  }, [])

  const claims = token ? getTokenClaims() : null
  const isAuthenticated = Boolean(token) && !isTokenExpired(claims)
  const isAdmin = isAuthenticated && Boolean(claims?.isAdmin)

  return (
    <AuthContext.Provider value={{ token, claims, isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Client-side auth state, for UX only (showing/hiding UI, redirecting before
// a protected page renders). The backend independently verifies the token on
// every request - that's the real authorization boundary, not this.
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
