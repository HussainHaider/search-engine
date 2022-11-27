//React imports
import React, { ReactElement } from 'react';
//other third party imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(): ReactElement {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        alt="green iguana"
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography component="div"
          gutterBottom
          variant="h5">
          Lizard
        </Typography>
        <Typography color="text.secondary"
          variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}