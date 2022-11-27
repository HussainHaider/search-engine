import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// local imports
import { Web } from '../../../../../interfaces/web';

type WebItemProps = {
  data: Web
};

const WebItem = (props: WebItemProps): ReactElement => {
  const { data } = props;
  return (
    <ItemWrappar>
      <StyledTypography
        variant="body2"
      >
        {data.url}
      </StyledTypography>
      <StyledTypography
        variant="h5"
      >
        {data.description}
      </StyledTypography>
      <StyledTypography
        dangerouslySetInnerHTML={{
          __html: `${data.snippet}`
        }}
        variant="body1"
      />
    </ItemWrappar>
  )
}

export default WebItem;

const ItemWrappar = styled(Box)(
  ({ theme }) => ({
    marginBottom: theme.spacing(5),
  }),
);

const StyledTypography = styled(Typography)(
  ({ theme }) => ({
    marginBottom: theme.spacing(1),
  }),
);

