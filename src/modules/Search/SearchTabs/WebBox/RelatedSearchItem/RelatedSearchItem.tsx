import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type RelatedSearchItemProps = {
  data: string
}

const RelatedSearchItem = (props: RelatedSearchItemProps): ReactElement => {
  const { data } = props;
  return (
    <ItemWrappar alignItems='center'
      display='flex'>
      <SearchIcon />
      <Typography
        dangerouslySetInnerHTML={{
          __html: `${data}`
        }}
        variant="body1"
      />
    </ItemWrappar>
  )
}

export default RelatedSearchItem;

const ItemWrappar = styled(Box)(
  ({ theme }) => ({
    padding: theme.spacing(3),
    background: '#f1f3f4',
    borderRadius: '100px',
    width: '30%',
    marginTop: theme.spacing(2),
  }),
);
