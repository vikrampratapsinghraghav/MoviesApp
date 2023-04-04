import {Cinema, NearByCinemaModel} from '../models/NearByCinemasModel';
import {getHeaders} from './utilMethods';
// :
export const getNearByCinemas: Promise<Cinema[]>  = async () => {
  const event = new Date();

  const fetchResult = await fetch(
    'https://api-gate2.movieglu.com/cinemasNearby/?n=5',
    {
      method: 'GET',
      headers: getHeaders(event),
    },
  );
  const jsonResult: NearByCinemaModel = await fetchResult.json();
  const cinemas: Cinema[] = jsonResult.cinemas.map(cinema => {
    return cinema;
  });
  return cinemas;
};
