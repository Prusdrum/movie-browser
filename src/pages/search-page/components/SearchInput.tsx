import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { searchMovie } from '../../../common/service/api/searchMovie';
import { IMovieSearchResult } from '../../../common/types/state/IMovieSearchResult';
import { searchResultFromApi } from '../../../common/service/mapper';
import SearchInputLabel from './SearchInputLabel';

const SearchInput = () => {
  const [options, setOptions] = useState<IMovieSearchResult[]>([]);
  const [query, setQuery] = useState('');

  const setQueryDebounced = debounce(setQuery, 300);

  useEffect(() => {
    let active = true;

    (async () => {
      if (query.length >= 3) {
        try {
          const response = await searchMovie(query);
          if (active) {
            setOptions(response.Search.map(searchResultFromApi));
          }
        } catch (err) {
          
        }
  
      }
    })();

    return () => {
      active = false;
    }
  }, [query]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryDebounced(event.target.value);
  }

  return (
    <div>
      <Autocomplete 
        options={options}
        renderOption={(option) => <SearchInputLabel movie={option}/>}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField 
            {...params}
            value={query}
            onChange={onInputChange}
            placeholder="Start typing movie titles..."
            variant="outlined"
          />
        )}
      />
    </div>
  )
}

export default SearchInput;