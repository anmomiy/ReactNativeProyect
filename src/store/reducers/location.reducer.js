import { locationTypes } from '../types';

import Location from "../../models/location";

const { SET_LOCATION, ADD_LOCATION } = locationTypes;
const initialState = {
    locations: [],
  };

  const locationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_LOCATION:
            const newLocation = new Location(
                Date.now().toString(),
                action.payload.title,
                action.payload.address,
                action.payload.coords
              );
              
              return{
                ...state,
                locations: state.locations.concat(newLocation)
              }
        case SET_LOCATION:
            return {
                ...state,
                locations: action.locations.map(item => new Location(
                    Date.now().toString(),
                    action.payload.title,
                    action.payload.address,
                    action.payload.coords
                ))
            }    
        default: 
            return state;
  }
  }
  export default locationReducer;