import instance from '../utilities/axios';
import { WEATHER_API } from '../constants/restEndPoints';
import { WeatherResponse } from '../interfaces/home';

/**
 * get images search API call
 * @param {object} searchTerm
 * @return {Promise} axios return the promise with the data
 */
export function getWeatherUpdates(
  searchTerm: string,
): Promise<WeatherResponse> {
  return instance.get(WEATHER_API.REAL_TIME_WEATHER, {
    params: {
      q: searchTerm,
    },
    headers: WEATHER_API.HEADERS,
  });
}
