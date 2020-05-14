import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const PageWrapper = ({ children }: Props) => {
  const style = useStyle();
  return (
    <Box mt={2}>
      <Paper className={style.paper}>
        {children}
      </Paper>
    </Box>
  );
}

export default PageWrapper;