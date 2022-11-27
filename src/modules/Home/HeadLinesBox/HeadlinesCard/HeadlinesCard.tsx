//React imports
import React, { ReactElement } from 'react';
//other third party imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//local imports
import { HeadlinesData } from '../../../../interfaces/home';

type HeadlinesCardProps = {
  data: HeadlinesData,
}

const HeadlinesCard = (props: HeadlinesCardProps): ReactElement => {
  const { data } = props;
  const { title, link, photoUrl, publishedDatetime, sourceUrl, sourceLogo } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        alt="green iguana"
        component="img"
        height="140"
        image={photoUrl}
      />
      <CardContent>
        <Typography component="div"
          gutterBottom
          variant="h5">
          {title}
        </Typography>
        <Typography color="text.secondary"
          variant="body2">
          {link}, {publishedDatetime}, {sourceUrl}, {sourceLogo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default HeadlinesCard;