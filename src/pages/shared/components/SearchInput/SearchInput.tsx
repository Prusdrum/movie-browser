import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../state/IRootState';
import { UPDATE_QUERY } from '../../../../state/search/searchActions';
import { ISearchState } from '../../../../state/search/searchState';
import SearchInputLabel from './SearchInputLabel';

const SearchInput = () => {
  const {
    isLoading,
    query,
    results
  } = useSelector<IRootState, ISearchState>(state => state.search);
  const dispatch = useDispatch();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(UPDATE_QUERY(event.target.value));
  }

  return (
    <div>
      <Autocomplete 
        options={results}
        renderOption={(option) => <SearchInputLabel movie={option}/>}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField 
            {...params}
            value={query}
            onChange={onInputChange}
            placeholder="Search movies e.g. Forrest Gump"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                {isLoading ? <CircularProgress color="primary" size={20} /> : null}
                {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
    </div>
  )
}

export default SearchInput;