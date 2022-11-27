import { createSlice } from '@reduxjs/toolkit';
//local imports
import { WeatherData } from '../../interfaces/home';

export interface homeState {
  weather: WeatherData;
  news: [];
}

const initialState: homeState = {
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
    location: {
      lat: 0,
      lon: 0,
      name: '',
      country: '',
    },
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

      state.weather.location.lat = action.payload.location['lat'];
      state.weather.location.lon = action.payload.location['lon'];
      state.weather.location.name = action.payload.location['name'];
      state.weather.location.country =
        action.payload.location['country'];
    },
  },
});

export const {getWeather} = homeSlice.actions;

export default homeSlice.reducer;