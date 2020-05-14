import axios from 'axios';
import { IApiMovie } from '../../types/api/IApiMovie';
import { IApiError } from '../../types/api/IApiError';

const getApiKey = () => {
  return process.env.REACT_APP_MOVIE_API_KEY;
}

const BASE_URL = 'http://www.omdbapi.com';

const isError = (response: IApiMovie | IApiError): response is IApiError => {
  return response.Response === 'False';
};

export async function getMovie(id: string) {
  const url = `${BASE_URL}/?i=${id}&apikey=${getApiKey()}`;

  try {
    const response = await axios.get<IApiMovie | IApiError>(url);
    
    if (isError(response.data)) {
      throw new Error(response.data.Error);
    } else {
      return response.data;
    }
  } catch (err) {
    throw err;
  }
}
