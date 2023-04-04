export interface MovieDetailsModel {
    film_id: number
    imdb_id: number
    imdb_title_id: string
    film_name: string
    other_titles: any
    version_type: string
    images: Images
    synopsis_long: string
    distributor_id: number
    distributor: string
    release_dates: ReleaseDate[]
    age_rating: AgeRating[]
    duration_mins: number
    review_stars: number
    review_txt: string
    trailers: any
    genres: Genre[]
    cast: Cast[]
    directors: Director[]
    producers: any[]
    writers: Writer[]
    show_dates: ShowDate[]
    alternate_versions: any[]
    status: Status
  }
  
  export interface Images {
    poster: Poster
    still: Still
  }
  
  export interface Poster {
    "1": N1
    "2": N2
  }
  
  export interface N1 {
    image_orientation: string
    region: string
    medium: Medium
  }
  
  export interface Medium {
    film_image: string
    width: number
    height: number
  }
  
  export interface N2 {
    image_orientation: string
    region: string
    medium: Medium2
  }
  
  export interface Medium2 {
    film_image: string
    width: number
    height: number
  }
  
  export interface Still {
    "1": N12
    "2": N22
    "3": N3
    "4": N4
    "5": N5
    "6": N6
    "7": N7
  }
  
  export interface N12 {
    image_orientation: string
    medium: Medium3
  }
  
  export interface Medium3 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N22 {
    image_orientation: string
    medium: Medium4
  }
  
  export interface Medium4 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N3 {
    image_orientation: string
    medium: Medium5
  }
  
  export interface Medium5 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N4 {
    image_orientation: string
    medium: Medium6
  }
  
  export interface Medium6 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N5 {
    image_orientation: string
    medium: Medium7
  }
  
  export interface Medium7 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N6 {
    image_orientation: string
    medium: Medium8
  }
  
  export interface Medium8 {
    film_image: string
    width: number
    height: number
  }
  
  export interface N7 {
    image_orientation: string
    medium: Medium9
  }
  
  export interface Medium9 {
    film_image: string
    width: number
    height: number
  }
  
  export interface ReleaseDate {
    release_date: string
    notes: string
  }
  
  export interface AgeRating {
    rating: string
    age_rating_image: string
    age_advisory: string
  }
  
  export interface Genre {
    genre_id: number
    genre_name: string
  }
  
  export interface Cast {
    cast_id: number
    cast_name: string
  }
  
  export interface Director {
    director_id: number
    director_name: string
  }
  
  export interface Writer {
    writer_id: number
    writer_name: string
  }
  
  export interface ShowDate {
    date: string
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
  