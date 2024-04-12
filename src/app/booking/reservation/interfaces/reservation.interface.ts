import { Accommodation } from "../accommodation/interfaces/accommodation.interface"
import { Guest } from "../guest/interfaces/guest.interface"

export interface Reservation {
  id?: number
  arrival?: string
  departure?: string
  checkIn?: string
  checkOut?: string
  guest?: Guest
  accommodation?: Accommodation
}