import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// local imports
import { openInNewTab } from '../../../../../utilities/utils';
import { Web } from '../../../../../interfaces/web';

type WebItemProps = {
  data: Web
};

const WebItem = (props: WebItemProps): ReactElement => {
  const { data } = props;

  const linkHandler = (): void => {
    openInNewTab(data.url);
  };

  return (
    <ItemWrappar onClick={linkHandler}>
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
      <Description
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

const Description = styled(StyledTypography)(
  () => ({
    lineBreak: 'anywhere',
  }),
);