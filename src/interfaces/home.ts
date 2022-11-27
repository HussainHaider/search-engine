import { ResponseGenerator } from './common';

export interface WeatherResponse extends ResponseGenerator {
  data: WeatherData;
}

export interface WeatherData {
  isLoading: boolean;
  lastUpdated: string;
  tempC: number;
  isDay: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind: number;
  pressure: number;
  humidity: number;
}

export interface LocationData {
  lat: number;
  lon: number;
  name: string;
  country: string;
}
