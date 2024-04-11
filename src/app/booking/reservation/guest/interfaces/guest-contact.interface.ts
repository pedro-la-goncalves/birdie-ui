import { GuestContactType } from "../enums/guest-contact-type.enum"

export interface GuestContact {
  type?: GuestContactType
  value?: string
}
