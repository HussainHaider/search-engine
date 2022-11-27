import React, { ReactElement } from 'react';
//other third party imports
import Pagination from '@mui/material/Pagination';
// local imports
import { useAppSelector } from '../../../../app/hooks';


const NewsBox = (): ReactElement => {
  const newsData = useAppSelector((state) => state.web.newsData);
  return (
    <Pagination count={newsData.totalCount / 10} />
  )
}

export default NewsBox
