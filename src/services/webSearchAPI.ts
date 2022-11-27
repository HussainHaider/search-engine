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
): Promise<{
  totalCount: number;
  value: {
    url: string;
    height: number;
    width: number;
    thumbnail: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    base64Encoding: string;
    name: string;
    title: string;
    imageWebSearchUrl: string;
    webpageUrl: string;
  };
}> {
  return instance.get(WEB_SEARCH_API.IMAGE_SEARCH, {
    params: {
      q: searchTerm,
      pageNumber,
      pageSize: '10',
      autoCorrect: 'true',
    },
    headers: {
      'X-RapidAPI-Key':
        '5fb3834782msha1b6a47401eadd8p18abf4jsnf967daef4d8e',
      'X-RapidAPI-Host':
        'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  });
}
