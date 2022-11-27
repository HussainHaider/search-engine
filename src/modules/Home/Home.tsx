//React imports
import React, { ReactElement, useEffect } from 'react';
//other third party imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useGeolocated } from 'react-geolocated';
// local imports
import NewsCard from '../Common/NewsCard/NewsCard';
import SearchBar from '../Common/SearchBar/SearchBar';
import { setLocation } from '../../store/reducers/homeSlice';
import { useAppDispatch } from '../../app/hooks';
import WeatherWidget from '../Common/WeatherWidget/WeatherWidget';


const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (isGeolocationEnabled)
      dispatch(setLocation(coords));
  }, [isGeolocationEnabled, coords]);

  return (
    <Box>
      <StyledAppBar
        position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <WeatherWidget />
          </Box>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </StyledAppBar>
      <Box component="main"
        sx={{ padding: '2.4rem' }}>
        <Grid container
          spacing={2}>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Home;

const StyledAppBar = styled(AppBar)(
  () => ({
    background: 'url(\'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\')',
    '& .MuiToolbar-root': {
      minHeight: '20rem',
    },
  }),
);
