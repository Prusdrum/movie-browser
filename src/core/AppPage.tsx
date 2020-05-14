import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import PageWrapper from '../common/components/PageWrapper/PageWrapper';

interface Props {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  appBarSpacer: {
    ...theme.mixins.toolbar
  }
}));

const AppPage = ({ children }: Props) => {
  const style = useStyle();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1">Movie app</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className={style.appBarSpacer}></div>
        <PageWrapper>
          {children}
        </PageWrapper>
      </Container>
    </div>
  );
};

export default AppPage;