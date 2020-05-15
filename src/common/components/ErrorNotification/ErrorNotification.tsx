import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  errorNotification: {
    color: theme.palette.error.main,
    border: `3px solid ${theme.palette.error.main}`,
    padding: theme.spacing(2),
  }
}));

const ErrorNotification = ({ children }: Props) => {
  const style = useStyle();
  
  return (
    <div className={style.errorNotification}>{children}</div>
  )
};

export default ErrorNotification;