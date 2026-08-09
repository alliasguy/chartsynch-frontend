import { jwtDecode } from 'jwt-decode'

// Plain (non-React) module so it can be used both inside components and in
// the API client's request interceptor, which runs outside React.
const TOKEN_KEY = 'token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token)

export const clearToken = () => localStorage.removeItem(TOKEN_KEY)

// Decodes the JWT payload client-side for UX purposes only (e.g. deciding
// whether to show a route's content or redirect to /login). This is NOT a
// security boundary - a user can trivially forge whatever payload they like
// in their own browser. The backend independently verifies the token's
// signature and claims on every request; that's the real authorization
// check.
export const getTokenClaims = () => {
  const token = getToken()
  if (!token) return null
  try {
    return jwtDecode(token)
  } catch (error) {
    return null
  }
}

export const isTokenExpired = (claims) => {
  if (!claims?.exp) return false
  return claims.exp * 1000 < Date.now()
}

// Every failed API response uses the same generic {status:'error', message}
// shape, whether the token is actually invalid/expired or the server just
// hit a transient error (e.g. a cold-start DB hiccup). Only the messages
// below mean the session itself is invalid - anything else must not force
// a logout, or a passing server error logs the user out of a token that's
// still perfectly valid.
const AUTH_ERROR_MESSAGES = ['Invalid token', 'Token expired', 'User not found', 'No token provided']

export const isAuthError = (data) =>
  data?.status === 'error' && AUTH_ERROR_MESSAGES.includes(data?.message)
