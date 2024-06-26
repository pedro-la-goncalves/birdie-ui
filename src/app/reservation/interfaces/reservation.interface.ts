import { Guest } from "../../guest/interfaces/guest.interface"
import { TotalChargedDetail } from "./total-charged-detail.interface"

export interface Reservation {
  id?: number
  guest?: Guest
  scheduledEntry?: string
  scheduledDeparture?: string
  checkIn?: string
  checkOut?: string
  parking?: boolean
  estimatedTotal?: number
  totalCharged?: number
  totalChargedDetails?: TotalChargedDetail[]
}
