import { locationTypes } from '../types';
import { getLocations, insertLocation } from "../../db";
import { URL_GEOCODING } from "../../utils/maps";
const { ADD_LOCATION, SET_LOCATION } = locationTypes;
export const saveLocation = (title, coords) => {
    return async (dispatch) => {
      try {
        const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
  
        if (!response.ok) {
          throw new Error("No se ha podido conectar cone el servicio de geolocalización");
        }
  
        const data = await response.json();
        if (!data.results) throw new Error("No se ha podido encontrar la dirección");
        
        const address = data.results[0].formatted_address;
        const result = await insertLocation(title, address, coords);
        dispatch({type: ADD_LOCATION, payload: {title, address: address, coords: coords}});
      } catch (error) {
        console.log(error);
      }
    };
  };
  export const loadLocations = () => {
    return async (dispatch) => {
      try {
        const result = await getLocations();
        dispatch({type: SET_LOCATION, locations: result.rows._array});
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  };