import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// local imports
import { News } from '../../../../../interfaces/web';


type NewsItemProps = {
  data: News
};

const NewsItem = (props: NewsItemProps): ReactElement => {
  const { data } = props;
  return (<Card sx={{ display: 'flex', marginBottom: '24px' }}>
    <CardMedia
      alt="Live from space album cover"
      component="img"
      image="https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      sx={{ width: 151, marignRight: '20px' }}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div"
          variant="h5">
          {data.title}
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
        >
          {data?.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Typography
          component="p"
          variant="subtitle1"
        >
          {data.datePublished?.split('T')?.[0]}
        </Typography>
      </Box>
    </Box>
  </Card>);
}

export default NewsItem
