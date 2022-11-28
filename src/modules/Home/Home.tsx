//React imports
import React, { ReactElement, useEffect } from 'react';
//other third party imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useGeolocated } from 'react-geolocated';
// local imports
import { GET_LOCATION } from '../../store/actionTypes/home';
import { getWeatherAction } from '../../store/actions/home';
import HeadLinesBox from './HeadLinesBox/HeadLinesBox';
import SearchBar from '../Common/SearchBar/SearchBar';
import { setLocation } from '../../store/reducers/homeSlice';
import { useAppDispatch } from '../../app/hooks';
import WeatherWidget from './WeatherWidget/WeatherWidget';


const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  // the below code takes the permission from user
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (isGeolocationEnabled && coords) {
      dispatch(setLocation(coords));
      dispatch(getWeatherAction(coords.latitude, coords.longitude));
    }
  }, [isGeolocationEnabled, coords]);

  // below useEffect runs if the user don't give permission of his/her location
  useEffect(() => {
    if (!isGeolocationAvailable || !isGeolocationEnabled)
      dispatch({ type: GET_LOCATION });
  }, [isGeolocationAvailable, isGeolocationEnabled]);

  return (
    <Box>
      <StyledAppBar
        position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <WeatherWidget />
          </Box>
          <SearchBar color='secondary' />
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </StyledAppBar>
      <HeadLinesBox />
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
