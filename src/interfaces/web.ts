export interface ImageResponse {
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