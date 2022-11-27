//React imports
import React, { ReactElement } from 'react';
//other third party imports
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import NewsCard from '../Common/NewsCard/NewsCard';


const Home = (): ReactElement => {
  return (
    <Box>
      <AppBar component="nav"
        position="sticky">
        <Toolbar>
          <Autocomplete
            freeSolo
            fullWidth
            id="search-box"
            options={[
              { label: 'The Shawshank Redemption', year: 1994 },
              { label: 'The Godfather', year: 1972 }]}
            renderInput={(params) => <TextField {...params}
              placeholder="search the web"
            />}
          />
        </Toolbar>
      </AppBar>
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
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
          <Grid xs={3}>
            <NewsCard />
          </Grid>
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
