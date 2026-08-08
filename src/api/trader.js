import { apiFetch, apiFetchStrict } from './client'

// axios-based in the original code - Admindashboard.jsx relies on this
// throwing on a non-2xx response rather than inspecting the body.
export const createTrader = (payload) =>
  apiFetchStrict('/api/createTrader', { method: 'POST', body: payload })

export const fetchTraders = () => apiFetch('/api/fetchTraders', { auth: false })
