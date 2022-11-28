import React, { ReactElement, useEffect } from 'react';
//other third party imports
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GET_WEB_SEARCH } from '../../../../store/actionTypes/web';
import { getPaginationCount } from '../../../../utilities/utils';
import NoResult from '../../../Common/NoResult/NoResult';
import RelatedSearchItem from './RelatedSearchItem/RelatedSearchItem';
import { StyledPagination } from '../../../../styles/CommonStyles';
import usePagination from '../../../../app/usePagination';
import useParams from '../../../../app/useParams';
import WebItem from './WebItem/WebItem';


const WebBox = (): ReactElement => {
  // redux
  const dispatch = useAppDispatch();
  const webData = useAppSelector((state) => state.web.webData);
  //hooks
  const [searchTerm] = useParams(GET_WEB_SEARCH);
  // state
  const [page, handleChange] = usePagination();

  useEffect(() => {
    // if page is positive number and we don't have the data then fetch it otherwise no.
    // page 1 data is managed in useParams hooks
    if (page && page !== 1 && !webData?.data[page]) {
      dispatch({
        type: GET_WEB_SEARCH, payload: {
          searchTerm: searchTerm, pageNumber: page
        }
      });
    }
  }, [page]);

  const PaginationCount = getPaginationCount(webData.totalCount);

  return (
    <>
      {/* if data is loading then show the loading component. if not loading then check that wether we have the data or not.
        if we don't have the data for even one page then show the noResult component otherwise render the webItem component
      */}
      {webData.isLoading ?
        <CircularProgress /> :
        Object.keys(webData?.data).length === 0 ? <NoResult /> :
          (webData?.data[page]?.map((news): ReactElement => {
            return <WebItem data={news}
              key={news.id} />
          }))}
      {webData?.relatedSearch.length && (<Typography
        variant="h5"
      >
        Related Search
      </Typography>)}
      <Grid container
        spacing={2}>
        {
          webData?.relatedSearch?.map((search): ReactElement => {
            return (<Grid key={search}
              xs={4} >
              <RelatedSearchItem data={search} />
            </Grid>)
          })
        }
      </Grid>
      {
        PaginationCount && <StyledPagination count={PaginationCount}
          onChange={handleChange}
          page={page} />
      }
    </>
  )
}

export default WebBox;
