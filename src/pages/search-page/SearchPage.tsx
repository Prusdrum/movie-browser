import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchInput from './components/SearchInput';

const useStyle = makeStyles((theme) => ({
  inputContainer: {
    width: '50%',
    margin: '0 auto',
  },
}))

const SearchPage = () => {
  const style = useStyle();
  return (
    <div>
      <div className={style.inputContainer}>
        <SearchInput />
      </div>
    </div>
  )
}

export default SearchPage;