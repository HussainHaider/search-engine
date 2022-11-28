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

export interface HeadlinesResponse extends ResponseGenerator {
  data: {
    status: string;
    request_id: string;
    data: HeadlinesData[];
  };
}

export interface HeadlinesData {
  title: string;
  link: string;
  photoUrl: string;
  publishedDatetime: string;
  sourceUrl: string;
  sourceLogo: string;
}

export interface LocationResponse extends ResponseGenerator {
  data: {
    country_code: string;
    country_name: string;
    city: string;
    postal: string;
    latitude: number;
    longitude: number;
    IPv4: string;
    state: string;
  };
}
