import {CLIENT_VALUE,X_API_KEY_VALUE,AUTHORIZATION_VALUE,TERRIOTORY_VALUE,API_VERSION_VALUE,GEOLOCATION_VALUE } from "./constants"
import {
 
  Share,
} from 'react-native';
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

export const onShare = async (movieName:string,details:string) => {
  try {
    const result = await Share.share({
      message:
        `${movieName}\n${details}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
   
  }
};