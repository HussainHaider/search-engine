const WEATHER_BASE_URL = 'https://weatherapi-com.p.rapidapi.com';
const WEB_BASE_URL =
  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api';

// below two keys should be in env file
const rapidAPIKey =
  '5fb3834782msha1b6a47401eadd8p18abf4jsnf967daef4d8e';
const newsdataAPIKey = 'pub_13928841df9ac4efdee0ef7cbdd0c2f202fe7';

export const WEATHER_API = {
  REAL_TIME_WEATHER: `${WEATHER_BASE_URL}/current.json`,
  HEADERS: {
    'X-RapidAPI-Key': rapidAPIKey,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const WEB_SEARCH_API = {
  IMAGE_SEARCH: `${WEB_BASE_URL}/Search/ImageSearchAPI`,
  NEWS_SEARCH: `${WEB_BASE_URL}/search/NewsSearchAPI`,
  WEB_SEARCH: `${WEB_BASE_URL}/Search/WebSearchAPI`,
  AUTO_COMPLETE: `${WEB_BASE_URL}/spelling/AutoComplete`,
  HEADERS: {
    'X-RapidAPI-Key': rapidAPIKey,
    'X-RapidAPI-Host':
      'contextualwebsearch-websearch-v1.p.rapidapi.com',
  },
};

export const REAL_TIME_NEWS_API = {
  HEADLINES: `https://newsdata.io/api/1/news?apikey=${newsdataAPIKey}`,
  HEADERS: {},
};
