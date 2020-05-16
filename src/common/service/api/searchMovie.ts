import axios from 'axios';
import { IApiError } from '../../types/api/IApiError';
import { IApiSearchResponse } from '../../types/api/IApiSearchResponse';
import { BASE_URL } from './shared';

const getApiKey = () => {
  return process.env.REACT_APP_MOVIE_API_KEY;
}

const isError = (response: IApiSearchResponse | IApiError): response is IApiError => {
  return response.Response === 'False';
};

export async function searchMovie(query: string): Promise<IApiSearchResponse> {
  const url = `${BASE_URL}/?s=${query}&apikey=${getApiKey()}`;

  try {
    const response = await axios.get<IApiSearchResponse | IApiError>(url);
    
    if (isError(response.data)) {
      throw new Error(response.data.Error);
    } else {
      return response.data;
    }
  } catch (err) {
    throw err;
  }
}
