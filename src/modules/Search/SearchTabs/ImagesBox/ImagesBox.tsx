import React, { ReactElement, useEffect, SyntheticEvent } from 'react';
//other third party imports
import AutoSizer from 'react-virtualized-auto-sizer';
import Box from '@mui/material/Box';
import { VariableSizeGrid as Grid } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';
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

  const { value, pageNumber } = imagesData;

  const fetchData = (pageNumber: number): void => {
    dispatch({
      type: GET_IMAGES, payload: {
        searchTerm: searchParams, pageNumber
      }
    });
  }

  const handleScroll = (e: SyntheticEvent): void => {
    console.log('scrolling');
    const target = e.target as HTMLInputElement;
    const bottom = target?.scrollHeight - target?.scrollTop === target?.clientHeight;
    console.log('bottom: ' + bottom);
    if (bottom)
      console.log('bottom hit!!');
  }

  useEffect(() => {
    fetchData(pageNumber);
  }, []);

  return (
    <MasonryWrapper onScroll={handleScroll}>
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
    minHeight: '500vh'
  }),
);

const ItemWrapper = styled(Box)(
  ({ theme }) => ({
    padding: theme.spacing(0),
  }),
);
