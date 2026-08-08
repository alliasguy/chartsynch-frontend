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
