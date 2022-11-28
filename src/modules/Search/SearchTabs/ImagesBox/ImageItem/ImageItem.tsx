import React, { ReactElement } from 'react';
//other third party imports
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// local imports
import { Image } from '../../../../../interfaces/web';

type ImageItemProps = {
  data: Image
};

const ImageItem = (props: ImageItemProps): ReactElement => {
  const { data } = props;
  return (
    <ImageListItem>
      <img
        alt={data.name}
        loading="lazy"
        src={`${data.url}?w=248&fit=crop&auto=format`}
      // srcSet={`${data.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
      />
      <ImageListItemBar position="below"
        title={data.webpageUrl} />
      <ImageListItemBar position="below"
        title={data.title} />
    </ImageListItem>
  )
}

export default ImageItem;
