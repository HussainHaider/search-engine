import { createSlice } from '@reduxjs/toolkit';
//local imports
import {
  WeatherData,
  LocationData,
  HeadlinesData,
} from '../../interfaces/home';

export interface homeState {
  location: LocationData;
  weather: WeatherData;
  news: HeadlinesData[];
}

const initialState: homeState = {
  location: {
    lat: 0,
    lon: 0,
    name: '',
    country: '',
  },
  weather: {
    isLoading: true,
    lastUpdated: '',
    tempC: 0,
    isDay: 0,
    condition: {
      text: '',
      icon: '',
      code: 0,
    },
    wind: 0,
    pressure: 0,
    humidity: 0,
  },
  news: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getWeather: (state, action) => {
      state.weather.isLoading = false;
      state.weather.lastUpdated =
        action.payload.current['last_updated'];
      state.weather.tempC = action.payload.current['temp_c'];
      state.weather.isDay = action.payload.current['is_day'];
      state.weather.condition.text =
        action.payload.current.condition['text'];
      state.weather.condition.icon =
        action.payload.current.condition['icon'];
      state.weather.condition.code =
        action.payload.current.condition['code'];
      state.weather.wind = action.payload.current['wind_kph'];
      state.weather.pressure = action.payload.current['pressure_in'];
      state.weather.humidity = action.payload.current['humidity'];

      state.location.lat = action.payload.location['lat'];
      state.location.lon = action.payload.location['lon'];
      state.location.name = action.payload.location['name'];
      state.location.country = action.payload.location['country'];
    },
    setLocation: (state, action) => {
      state.location.lat = action.payload?.latitude;
      state.location.lon = action.payload?.longitude;
    },
    getHeadlines: (state, action) => {
      state.news = action.payload.results.map(
        (newsItem: {
          title: string;
          link: string;
          image_url: string;
          published_datetime_utc: string;
          source_url: string;
          source_logo_url: string;
        }) => {
          return {
            title: newsItem['title'],
            link: newsItem['link'],
            photoUrl: newsItem['image_url'],
            publishedDatetime: newsItem['published_datetime_utc'],
            sourceUrl: newsItem['source_url'],
            sourceLogo: newsItem['source_logo_url'],
          };
        },
      );
    },
  },
});

export const { getWeather, setLocation, getHeadlines } =
  homeSlice.actions;

export default homeSlice.reducer;
