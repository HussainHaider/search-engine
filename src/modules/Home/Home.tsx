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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { GET_HEADLINES } from '../../store/actionTypes/home';
import HeadlinesCard from '../Common/HeadlinesCard/HeadlinesCard';
import SearchBar from '../Common/SearchBar/SearchBar';
import { setLocation } from '../../store/reducers/homeSlice';
import WeatherWidget from '../Common/WeatherWidget/WeatherWidget';


const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const headLines = useAppSelector((state) => state.home.news);
  const city = useAppSelector((state) => state.home.location.name);
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

  useEffect(() => {
    if (city)
      dispatch({
        type: GET_HEADLINES,
        payload: {
          searchTerm: 'Lahore',
        }
      });
  }, [city]);


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
        sx={{ padding: '2.4rem' }}>.
        <Grid container
          spacing={2}>
          {
            headLines.map((news) => (<Grid key={news.title}
              xs={3}>
              <HeadlinesCard data={news} />
            </Grid>))
          }
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
