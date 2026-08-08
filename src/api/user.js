import { apiFetch } from './client'

export const getData = () => apiFetch('/api/getData')

export const updateUserData = (payload) =>
  apiFetch('/api/updateUserData', { method: 'POST', body: payload })

export const changePassword = (payload) =>
  apiFetch('/api/changePassword', { method: 'POST', body: payload })

export const invest = (payload) =>
  apiFetch('/api/invest', { method: 'POST', body: payload })

export const withdraw = (payload) =>
  apiFetch('/api/withdraw', { method: 'POST', body: payload })

export const sendProof = (payload) =>
  apiFetch('/api/sendproof', { method: 'POST', body: payload })

export const submitKYC = (payload) =>
  apiFetch('/api/submitKYC', { method: 'POST', body: payload })

export const copytrade = (payload) =>
  apiFetch('/api/copytrade', { method: 'POST', body: payload })

export const stopcopytrade = (payload) =>
  apiFetch('/api/stopcopytrade', { method: 'POST', body: payload })
