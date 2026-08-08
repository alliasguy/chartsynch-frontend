import { apiFetch, apiFetchStrict } from './client'

export const register = (payload) =>
  apiFetch('/api/register', { method: 'POST', body: payload, auth: false })

export const referLookup = (username) =>
  apiFetch(`/${username}/refer`, { auth: false })

// axios-based in the original code - callers rely on this throwing on a
// non-2xx response rather than inspecting the body.
export const login = (payload) =>
  apiFetchStrict('/api/login', { method: 'POST', body: payload, auth: false })

export const verifyEmailLink = (id, token) =>
  apiFetch(`/${id}/verify/${token}`, { auth: false })

export const forgotPassword = (email) =>
  apiFetch('/api/forgotpassword', { method: 'POST', body: { email }, auth: false })

// axios-based in the original code - see login() above.
export const resetPassword = (payload) =>
  apiFetchStrict('/api/resetpassword', { method: 'POST', body: payload, auth: false })
