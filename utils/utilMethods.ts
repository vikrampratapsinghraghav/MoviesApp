import {CLIENT_VALUE,X_API_KEY_VALUE,AUTHORIZATION_VALUE,TERRIOTORY_VALUE,API_VERSION_VALUE,GEOLOCATION_VALUE } from "./constants"

export const getHeaders = (event:Date) => {
    return {  
            'client': CLIENT_VALUE,
            'x-api-key': X_API_KEY_VALUE,
            'authorization': AUTHORIZATION_VALUE,
            'territory': TERRIOTORY_VALUE,
            'api-version': API_VERSION_VALUE,
            'geolocation': GEOLOCATION_VALUE,
            'device-datetime': event.toISOString(),
          
      }
}

export const hitApi = async (url:string) => {
      const event = new Date();

      const fetchResult = await fetch(
        url,
        {
          method: 'GET',
          headers: getHeaders(event),
        },
      );
      const jsonResult = await fetchResult.json();
      console.log('Api result',jsonResult);
      
      return jsonResult;
}