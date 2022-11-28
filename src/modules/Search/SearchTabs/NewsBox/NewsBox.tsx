import React, { ReactElement, useEffect } from 'react';
//other third party imports
import CircularProgress from '@mui/material/CircularProgress';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GET_NEWS } from '../../../../store/actionTypes/web';
import { getPaginationCount } from '../../../../utilities/utils';
import NewsItem from './NewsItem/NewsItem';
import NoResult from '../../../Common/NoResult/NoResult';
import { StyledPagination } from '../../../../styles/CommonStyles';
import usePagination from '../../../../app/usePagination';
import useParams from '../../../../app/useParams';


const NewsBox = (): ReactElement => {
  // redux
  const dispatch = useAppDispatch();
  const newsData = useAppSelector((state) => state.web.newsData);
  //hooks
  const [searchTerm] = useParams(GET_NEWS);
  // state
  const [page, handleChange] = usePagination();

  useEffect(() => {
    // if page is positive number and we don't have the data then fetch it otherwise no.
    // page 1 data is managed in useParams hooks
    if (page && page !== 1 && !newsData?.data[page]) {
      dispatch({
        type: GET_NEWS, payload: {
          searchTerm: searchTerm, pageNumber: page
        }
      });
    }
  }, [page])

  const PaginationCount = getPaginationCount(newsData.totalCount);
  return (
    <>
      {/* if data is loading then show the loading component. if not loading then check that wether we have the data or not.
        if we don't have the data for even one page then show the noResult component otherwise render the NewsItem component
      */}
      {newsData.isLoading ?
        <CircularProgress /> :
        Object.keys(newsData?.data).length === 0 ? <NoResult /> : (newsData?.data[page]?.map((news): ReactElement => {
          return <NewsItem data={news}
            key={news.id} />
        }))}
      {
        PaginationCount && (<StyledPagination count={PaginationCount}
          onChange={handleChange}
          page={page} />)
      }
    </>
  )
}

export default NewsBox
