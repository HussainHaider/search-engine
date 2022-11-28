import React, { ReactElement } from 'react';
//other third party imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// local imports
import { News } from '../../../../../interfaces/web';


type NewsItemProps = {
  data: News
};

const NewsItem = (props: NewsItemProps): ReactElement => {
  const { data } = props;
  return (<StyledCard>
    <StyledCardMedia image={data.image.url} />
    <Box display='flex'
      flexDirection='column'
    >
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
      <PublishDateWrapper>
        <Typography
          component="p"
          variant="subtitle1"
        >
          {data.datePublished?.split('T')?.[0]}
        </Typography>
      </PublishDateWrapper>
    </Box>
  </StyledCard >);
}

export default NewsItem;

const StyledCard = styled(Card)(
  ({ theme }) => ({
    display: 'flex',
    marginBottom: theme.spacing(4)
  }),
);

const StyledCardMedia = styled(CardMedia)(
  ({ theme }) => ({
    width: '15rem',
    marignRight: theme.spacing(3),
  }),
);

const PublishDateWrapper = styled(Box)(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }),
);