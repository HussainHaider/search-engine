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
import { openInNewTab } from '../../../../utilities/utils';

type HeadlinesCardProps = {
  data: HeadlinesData,
}

const HeadlinesCard = (props: HeadlinesCardProps): ReactElement => {
  const { data } = props;
  const { title, link, photoUrl, publishedDatetime } = data;

  const learnMoreHandler = (): void => {
    openInNewTab(link);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        alt="green iguana"
        component="img"
        height="140"
        image={photoUrl || 'https://images.pond5.com/breaking-news-background-red-colour-footage-158889432_prevstill.jpeg'} // added alternative url
      />
      <CardContent>
        <Typography component="div"
          gutterBottom
          variant="h5">
          {title}
        </Typography>
        <Typography color="text.secondary"
          variant="body2">
          {publishedDatetime?.split('T')[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={learnMoreHandler}
          size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default HeadlinesCard;