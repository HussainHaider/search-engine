//React imports
import React, { ReactElement, useEffect } from 'react';
//other third party imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useGeolocated } from 'react-geolocated';
// local imports
import { useAppDispatch } from '../../app/hooks';
// import { GET_HEADLINES } from '../../store/actionTypes/home';
import HeadLinesBox from './HeadLinesBox/HeadLinesBox';
import SearchBar from '../Common/SearchBar/SearchBar';
import { setLocation } from '../../store/reducers/homeSlice';
import WeatherWidget from './WeatherWidget/WeatherWidget';


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
