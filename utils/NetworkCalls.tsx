import {Cinema, NearByCinemaModel} from '../models/NearByCinemasModel';
import {getHeaders, hitApi} from './utilMethods';
import exampleJson from './Movieslist.json'
import { MovieDetailsModel } from '../models/MovieDetailsModel';
export const getNearByCinemas: Promise<Cinema[]>  = async () => {
 
  const jsonResult: NearByCinemaModel = await hitApi('https://api-gate2.movieglu.com/cinemasNearby/?n=10')
  const cinemas: Cinema[] = jsonResult.cinemas.map(cinema => {
    return cinema;
  });
  return cinemas;
};

export const getMoviesForCinema = async () => {
    // const jsonResult = await hitApi('https://api-gate2.movieglu.com/cinemaShowTimes/?cinema_id=8941&date=2023-04-04');
    const customData = await require('./Movieslist.json');

    // console.log('Movies',exampleJson.films);
    return (exampleJson.films);
  };

  export const getFlimDetails = async (film_id:number) => {
    const event = new Date();
  
    const fetchResult = await fetch(
      `https://api-gate2.movieglu.com/filmDetails/?film_id=${film_id}`,
      {
        method: 'GET',
        headers: getHeaders(event),
      },
    );
    const jsonResult: MovieDetailsModel = await hitApi(`https://api-gate2.movieglu.com/filmDetails/?film_id=${film_id}`);
    console.log('Movie details',JSON.stringify(jsonResult));
    
    return jsonResult;
    
  };