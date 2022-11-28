import iso from 'iso-3166-1';
//local imports
import {
  WEATHER_API,
  REAL_TIME_NEWS_API,
  LOCATION_API,
} from '../constants/restEndPoints';
import {
  WeatherResponse,
  HeadlinesResponse,
  LocationResponse,
} from '../interfaces/home';
import instance from '../utilities/axios';

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

export function getHomeNews(
  country: string,
): Promise<HeadlinesResponse> {
  return instance.get(REAL_TIME_NEWS_API.HEADLINES, {
    params: {
      country: iso.whereCountry(country)?.alpha2,
      lang: 'en',
    },
    headers: REAL_TIME_NEWS_API.HEADERS,
  });
}

export function getLocation(): Promise<LocationResponse> {
  return instance.get(LOCATION_API.GEO);
}
