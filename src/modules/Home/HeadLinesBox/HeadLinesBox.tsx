//React imports
import React, { ReactElement, useEffect } from 'react';
//other third party imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
// local imports
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GET_HEADLINES } from '../../../store/actionTypes/home';
import HeadlinesCard from './HeadlinesCard/HeadlinesCard';


const HeadLinesBox = (): ReactElement => {
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.home.location.country);
  const headLines = useAppSelector((state) => state.home.news);

  useEffect(() => {
    if (country)
      dispatch({
        type: GET_HEADLINES,
        payload: {
          searchTerm: country,
        }
      });
  }, [country]);

  return (
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
  )
}

export default React.memo(HeadLinesBox);
