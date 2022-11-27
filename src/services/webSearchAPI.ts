import {
  ImageResponse,
  NewsResponse,
  WebResponse,
  AutoCompleteResponse,
} from '../interfaces/web';
import instance from '../utilities/axios';
import { WEB_SEARCH_API } from '../constants/restEndPoints';

/**
 * get images search API call
 * @param {object} searchTerm
 * @return {Promise} axios return the promise with the data
 */
export function getImages(
  searchTerm: string,
  pageNumber: number,
): Promise<ImageResponse> {
  return instance.get(WEB_SEARCH_API.IMAGE_SEARCH, {
    params: {
      q: searchTerm,
      pageNumber,
      pageSize: '10',
      autoCorrect: 'true',
    },
    headers: WEB_SEARCH_API.HEADERS,
  });
}

export function getNews(
  searchTerm: string,
  pageNumber: number,
): Promise<NewsResponse> {
  return instance.get(WEB_SEARCH_API.NEWS_SEARCH, {
    params: {
      q: searchTerm,
      pageNumber,
      pageSize: '10',
      autoCorrect: 'true',
    },
    headers: WEB_SEARCH_API.HEADERS,
  });
}

export function getWebSearch(
  searchTerm: string,
  pageNumber: number,
): Promise<WebResponse> {
  return instance.get(WEB_SEARCH_API.WEB_SEARCH, {
    params: {
      q: searchTerm,
      pageNumber,
      pageSize: '10',
      autoCorrect: 'true',
    },
    headers: WEB_SEARCH_API.HEADERS,
  });
}

export function getSearchSuggestion(
  searchTerm: string,
): Promise<AutoCompleteResponse> {
  return instance.get(WEB_SEARCH_API.AUTO_COMPLETE, {
    params: {
      text: searchTerm,
    },
    headers: WEB_SEARCH_API.HEADERS,
  });
}
