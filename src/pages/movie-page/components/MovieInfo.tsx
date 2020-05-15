import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  title: React.ReactNode;
  value: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  title: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    flex: '1',
  },
  value: {
    flex: '1',
    fontSize: theme.typography.pxToRem(16),
  }
}))

const MovieInfo = ({ title, value }: Props) => {
  const style = useStyle();

  return (
    <dl className={style.item}>
      <dt className={style.title}>{title}</dt>
      <dd className={style.value}>{value}</dd>
    </dl>
  )
}

export default MovieInfo;