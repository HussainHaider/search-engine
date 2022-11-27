import { AxiosHeaders } from 'axios';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: AxiosHeaders;
  request?: XMLHttpRequest;
  status?: number;
  statusText?: string;
}
