export interface IRECAPTCHAActionTypes {
  VERIFY?: string
}

export const RecaptchaActionTypes: Record<keyof IRECAPTCHAActionTypes, string> = {
  VERIFY: 'recaptcha/verify'
}
