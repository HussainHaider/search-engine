import { Action } from '../../interfaces/common';
import { GET_WEATHER } from '../actionTypes/home';

/**
 * getWeatherAction
 * @param  {number} latitude
 * @param  {number} longitude query params in the API url. By default its 10
 * @return {object} Action
 */
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
