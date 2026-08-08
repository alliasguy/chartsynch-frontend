// These are client-embeddable by nature (EmailJS public keys, an unsigned
// Cloudinary upload preset) - not secrets. They were previously copy-pasted
// as literals across 7 different files for EmailJS and 5 for Cloudinary;
// centralized here purely to remove that duplication.

export const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

// Primary EmailJS account - used for signup verification mail, admin/referral
// notifications, deposit/withdrawal alerts, and password reset mail.
export const EMAILJS_SERVICE_ID = 'service_xvf59us'
export const EMAILJS_USER_ID = 'ee7CtMRdf3w3NMhRi'
export const EMAILJS_VERIFY_TEMPLATE_ID = 'template_1lc11k1'
export const EMAILJS_GENERIC_TEMPLATE_ID = 'template_g6y6gxq'

// Separate EmailJS account, used only by OtpVerification.jsx's welcome mail.
export const EMAILJS_OTP_SERVICE_ID = 'service_xvf59us'
export const EMAILJS_OTP_USER_ID = 'ee7CtMRdf3w3NMhRi'
export const EMAILJS_OTP_TEMPLATE_ID = 'template_g6y6gxq'
export const EMAILJS_OTP_WELCOME_TEMPLATE_ID = 'template_1lc11k1'

// Separate EmailJS account, used only by BankForm.jsx.
export const EMAILJS_BANK_SERVICE_ID = 'service_w5tn3rs'
export const EMAILJS_BANK_USER_ID = 'QdH5BsljbU-7A-LJa'
export const EMAILJS_BANK_TEMPLATE_ID = 'template_q0lp31r'

export const sendEmailJS = ({ serviceId, templateId, userId, templateParams }) =>
  fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: templateParams
    })
  })

export const CLOUDINARY_CLOUD_NAME = 'duesyx3zu'
export const CLOUDINARY_UPLOAD_PRESET = 'upload'
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
