import React, { ReactElement, useEffect } from 'react';
//other third party imports
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
// local imports
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GET_WEB_SEARCH } from '../../../../store/actionTypes/web';
import { getPaginationCount } from '../../../../utilities/utils'
import RelatedSearchItem from './RelatedSearchItem/RelatedSearchItem';
import usePagination from '../../../../app/usePagination';
import WebItem from './WebItem/WebItem';


const WebBox = (): ReactElement => {
  // redux
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const webData = useAppSelector((state) => state.web.webData);
  // state
  const [page, handleChange] = usePagination();

  useEffect(() => {
    // if page is positive number and we don't have the data then fetch it otherwise no.
    if (page && !webData?.data[page]) {
      dispatch({
        type: GET_WEB_SEARCH, payload: {
          searchTerm: searchParams.get('q'), pageNumber: page
        }
      });
    }
  }, [page])

  const PaginationCount = getPaginationCount(webData.totalCount);
  return (
    <>
      {webData?.data[page]?.map((news): ReactElement => {
        return <WebItem data={news}
          key={news.id} />
      })}
      {webData?.relatedSearch.length && (<Typography
        variant="h5"
      >
        Related Search
      </Typography>)}
      {webData?.relatedSearch?.map((search): ReactElement => {
        return <RelatedSearchItem data={search}
          key={search} />
      })}
      {
        PaginationCount && <Pagination count={PaginationCount}
          onChange={handleChange}
          page={page} />
      }
    </>
  )
}

export default WebBox;
