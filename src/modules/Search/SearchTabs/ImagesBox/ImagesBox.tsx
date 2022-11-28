import React, { ReactElement, useEffect } from 'react';
//other third party imports
import AutoSizer from 'react-virtualized-auto-sizer';
import Box from '@mui/material/Box';
import { VariableSizeGrid as Grid } from 'react-window';
import { styled } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { GET_IMAGES } from '../../../../store/actionTypes/web';
import { Image } from '../../../../interfaces/web';
import ImageItem from './ImageItem/ImageItem';


const Cell = ({ columnIndex, rowIndex, style, data }: { columnIndex: number, rowIndex: number, style: object, data: Array<Image> }): ReactElement => {
  const offset = (rowIndex * 3) + columnIndex;
  return (<ItemWrapper style={style}>
    <ImageItem data={data[offset]} />
  </ItemWrapper>);
};

const ImagesBox = (): ReactElement => {
  // redux
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const imagesData = useAppSelector((state) => state.web.imagesData);

  const { value } = imagesData;

  useEffect(() => {
    dispatch({
      type: GET_IMAGES, payload: {
        searchTerm: searchParams, pageNumber: 1
      }
    });
  }, []);

  return (
    <MasonryWrapper>
      <AutoSizer>
        {({ width, height }): ReactElement => {
          const columnCount = 4;
          const rowCount = Math.floor(value.length / columnCount);
          return (<Grid
            columnCount={columnCount}
            columnWidth={(): number => {
              const windowWidth = window.innerWidth - 100;
              return (windowWidth / 100) * 25;
            }}
            height={height}
            itemData={value}
            rowCount={rowCount}
            rowHeight={(): number => 250}
            width={width}
          >
            {Cell}
          </Grid>);
        }}
      </AutoSizer>
    </MasonryWrapper>
  )
}

export default ImagesBox;

const MasonryWrapper = styled(Box)(
  () => ({
    width: '100%',
    minHeight: '70vh'
  }),
);

const ItemWrapper = styled(Box)(
  ({ theme }) => ({
    padding: theme.spacing(0),
  }),
);
