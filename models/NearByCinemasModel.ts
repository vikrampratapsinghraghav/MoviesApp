export interface NearByCinemaModel {
    cinemas: Cinema[]
    status: Status
  }
  
  export interface Cinema {
    cinema_id: number
    cinema_name: string
    address: string
    address2: string
    city: string
    state: string
    county: string
    postcode: string
    lat: number
    lng: number
    distance: number
    logo_url: string
  }
  
  export interface Status {
    count: number
    state: string
    method: string
    message: any
    request_method: string
    version: string
    territory: string
    device_datetime_sent: string
    device_datetime_used: string
  }
  