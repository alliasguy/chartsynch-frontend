import { API_URL as RAW_API_URL } from '../config/env'
import { getToken } from '../auth/tokenStorage'

// A trailing slash in the configured API_URL (easy to introduce via a Vercel
// env var) combined with a path like '/api/login' produces a double slash,
// which Vercel 308-redirects - and browsers refuse to follow a redirect on a
// CORS preflight, breaking every request with an opaque CORS error.
const API_URL = RAW_API_URL.replace(/\/+$/, '')

const buildHeaders = ({ auth, extraHeaders } = {}) => {
  const headers = { 'Content-Type': 'application/json', ...extraHeaders }
  if (auth) {
    const token = getToken()
    if (token) headers['x-access-token'] = token
  }
  return headers
}

const request = async (path, { method = 'GET', body, auth = true, headers } = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: buildHeaders({ auth, extraHeaders: headers }),
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const data = await response.json().catch(() => null)
  return { response, data }
}

// Never throws on a non-2xx HTTP status - callers branch on the parsed
// body's own `status` field, matching how this backend has always reported
// success/failure and how nearly every existing fetch()-based call site in
// this app already works.
export const apiFetch = (path, options) => request(path, options).then(({ data }) => data)

// Throws on any non-2xx HTTP status, mirroring axios's default behavior -
// used only by the handful of call sites that were built around axios and
// rely on try/catch (rather than inspecting the response body) to detect
// failure.
export const apiFetchStrict = async (path, options) => {
  const { response, data } = await request(path, options)
  if (!response.ok) {
    const error = new Error(data?.message || `Request failed with status ${response.status}`)
    error.status = response.status
    error.data = data
    throw error
  }
  return data
}

// Never throws, but also returns the raw HTTP status alongside the parsed
// body - for the rare call site that needs to distinguish e.g. a 401 (expired
// token) from a 400 (bad input) even though both use the body's generic
// `status: 'error'` convention.
export const apiFetchWithStatus = async (path, options) => {
  const { response, data } = await request(path, options)
  return { status: response.status, data }
}
