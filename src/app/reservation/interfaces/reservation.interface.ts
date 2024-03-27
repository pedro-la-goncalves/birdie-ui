import { Guest } from "../../guest/interfaces/guest.interface"

export interface Reservation {
  id?: number | null
  guest?: Guest | null
  scheduledEntry?: string
  scheduledDeparture?: string
  checkIn?: string
  checkOut?: string
  parking?: boolean
  estimatedTotal?: number
  totalCharged?: number
}
