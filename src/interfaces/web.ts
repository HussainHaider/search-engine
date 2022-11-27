import { ResponseGenerator } from './common';

export interface ImageResponse extends ResponseGenerator {
  data: ImagesData;
}

export interface ImagesData {
  totalCount: number;
  value: Array<Image>;
}

export interface Image {
  url: string;
  height: number;
  width: number;
  thumbnail: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  base64Encoding: string;
  name: string;
  title: string;
  provider: {
    name: string;
    favIcon: string;
    favIconBase64Encoding: string;
  };
  imageWebSearchUrl: string;
  webpageUrl: string;
}

export interface NewsResponse extends ResponseGenerator {
  data: NewsData;
}

export interface NewsData {
  totalCount: number;
  value: Array<News>;
}

export interface News {
  id: string;
  title: string;
  url: string;
  description: string;
  body: string;
  snippet: string;
  keywords: string;
  language: string;
  isSafe: boolean;
  datePublished: string;
  provider: {
    imageWebSearchUrl: string;
    webpageUrl: string;
    image: Image;
  };
}

export interface WebResponse extends ResponseGenerator {
  data: WebData;
}

export interface WebData {
  totalCount: number;
  relatedSearch: string[];
  value: Array<News>;
}

export interface Web {
  id: string;
  title: string;
  url: string;
  description: string;
  body: string;
  snippet: string;
  keywords: string;
  language: string;
  isSafe: boolean;
  datePublished: string;
  provider: {
    name: string;
    favIcon: string;
    favIconBase64Encoding: string;
  };
  image: Image;
}

export interface AutoCompleteResponse extends ResponseGenerator {
  data: string[];
}
