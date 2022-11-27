//React imports
import React, { ReactElement } from 'react';
//other third party imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
// local imports
import NewsCard from '../Common/NewsCard/NewsCard';
import SearchBar from '../Common/SearchBar/SearchBar';
import WeatherWidget from '../Common/WeatherWidget/WeatherWidget';


const Home = (): ReactElement => {
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
