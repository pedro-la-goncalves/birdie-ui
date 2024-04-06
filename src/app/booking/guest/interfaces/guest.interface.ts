import { GuestContact } from "./guest-contact.interface"

export interface Guest {
  id?: number
  name?: string
  surname?: string
  socialName?: string
  birthdate?: string
  contacts?: GuestContact[]
}
