import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchInput from '../shared/components/SearchInput/SearchInput';
import ViewHistory from '../shared/components/ViewHistory/ViewHistory';

const useStyle = makeStyles((theme) => ({
  inputContainer: {
    [theme.breakpoints.up('sm')] : {
      width: '50%',
    },
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
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
      <div>
        <ViewHistory />
      </div>
    </div>
  )
}

export default SearchPage;