import React, { ReactElement } from 'react';
//other third party imports
import AutoSizer from 'react-virtualized-auto-sizer';
import Box from '@mui/material/Box';
import { VariableSizeGrid as Grid } from 'react-window';
import { styled } from '@mui/material/styles';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { GET_IMAGES } from '../../../../store/actionTypes/web';
import { Image } from '../../../../interfaces/web';
import ImageItem from './ImageItem/ImageItem';
import useParams from '../../../../app/useParams';


const Cell = ({ columnIndex, rowIndex, style, data }: { columnIndex: number, rowIndex: number, style: object, data: Array<Image> }): ReactElement => {
  const offset = (rowIndex * 3) + columnIndex;
  return (<ItemWrapper style={style}>
    <ImageItem data={data[offset]} />
  </ItemWrapper>);
};

const ImagesBox = (): ReactElement => {
  // redux
  const dispatch = useAppDispatch();
  const imagesData = useAppSelector((state) => state.web.imagesData);
  //hooks
  // use the following hook for infiniteScrolling purpose
  useBottomScrollListener(() => {
    fetchData(pageNumber + 1);
  }, {
    offset: 50,
    debounce: 2000,
    triggerOnNoScroll: true
  });
  const [searchTerm] = useParams(GET_IMAGES);

  const { value, pageNumber } = imagesData;

  const fetchData = (pageNumber: number): void => {
    dispatch({
      type: GET_IMAGES, payload: {
        searchTerm: searchTerm, pageNumber
      }
    });
  }

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
    minHeight: '500vh'
  }),
);

const ItemWrapper = styled(Box)(
  ({ theme }) => ({
    padding: theme.spacing(0),
  }),
);
