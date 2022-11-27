import React, { ReactElement, useEffect } from 'react';
//other third party imports
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GET_NEWS } from '../../../../store/actionTypes/web';
import { getPaginationCount } from '../../../../utilities/utils'
import NewsItem from './NewsItem/NewsItem';
import usePagination from '../../../../app/usePagination';


const NewsBox = (): ReactElement => {
  // redux
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const newsData = useAppSelector((state) => state.web.newsData);
  // state
  const [page, handleChange] = usePagination();

  useEffect(() => {
    if (page) {
      dispatch({
        type: GET_NEWS, payload: {
          searchTerm: searchParams.get('q'), pageNumber: page
        }
      });
    }
  }, [page])

  const PaginationCount = getPaginationCount(newsData.totalCount);
  return (
    <>
      {newsData?.data[page]?.map((news): ReactElement => {
        return <NewsItem data={news}
          key={news.id} />
      })}
      <Pagination count={PaginationCount}
        onChange={handleChange}
        page={page} />
    </>
  )
}

export default NewsBox
