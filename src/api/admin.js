import { apiFetch } from './client'

export const adminLogin = (payload) =>
  apiFetch('/api/admin', { method: 'POST', body: payload, auth: false })

export const getUsers = () => apiFetch('/api/getUsers')

export const fundWallet = (payload) =>
  apiFetch('/api/fundwallet', { method: 'POST', body: payload })

export const debitWallet = (payload) =>
  apiFetch('/api/debitwallet', { method: 'POST', body: payload })

export const deleteUser = (payload) =>
  apiFetch('/api/deleteUser', { method: 'POST', body: payload })

export const deleteTrader = (payload) =>
  apiFetch('/api/deleteTrader', { method: 'POST', body: payload })

export const restoreUser = (payload) =>
  apiFetch('/api/admin/restoreUser', { method: 'POST', body: payload })

export const restoreTrader = (payload) =>
  apiFetch('/api/admin/restoreTrader', { method: 'POST', body: payload })

export const getDeletedUsers = () => apiFetch('/api/admin/deletedUsers')

export const getDeletedTraders = () => apiFetch('/api/admin/deletedTraders')

export const getAuditLog = () => apiFetch('/api/admin/auditlog')

export const upgradeUser = (payload) =>
  apiFetch('/api/upgradeUser', { method: 'POST', body: payload })

export const updateTraderLog = (payload) =>
  apiFetch('/api/updateTraderLog', { method: 'POST', body: payload })

export const distributeProfit = (payload) =>
  apiFetch('/api/distributeProfit', { method: 'POST', body: payload })

export const getWithdrawInfo = (payload) =>
  apiFetch('/api/getWithdrawInfo', { method: 'POST', body: payload })

export const verifyUser = (id) =>
  apiFetch('/api/verify', { method: 'POST', body: { id } })

export const approveKYC = (payload) =>
  apiFetch('/api/admin/approveKYC', { method: 'POST', body: payload })

export const rejectKYC = (payload) =>
  apiFetch('/api/admin/rejectKYC', { method: 'POST', body: payload })
