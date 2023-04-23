import { BASE_URL } from '@env';
import axios from 'axios';

if (!BASE_URL) {
  throw Error('Invalid base URL.');
}

export const api = axios.create({
  baseURL: BASE_URL,
});
