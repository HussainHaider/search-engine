import { Action } from '../../interfaces/common';
import { GET_WEATHER } from '../actionTypes/home';

export const getWeatherAction = (
  latitude: number,
  longitude: number,
): Action => {
  return {
    type: GET_WEATHER,
    payload: {
      searchTerm: `${latitude},${longitude}`,
    },
  };
};
