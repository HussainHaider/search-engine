//React imports
import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
// import { useSearchParams } from 'react-router-dom';
//local imports
// import * as actionTypes from '../../store/actionTypes/web';
import SearchBar from '../Common/SearchBar/SearchBar';
import SearchTabs from './SearchTabs/SearchTabs';
// import { useAppDispatch } from '../../app/hooks';


const Search = (): ReactElement => {
  // const [searchParams] = useSearchParams();
  // const dispatch = useAppDispatch();

  // console.log(searchParams.get('q'))

  // useEffect(() => {
  //   dispatch({
  //     type: actionTypes.GET_IMAGES, payload: {
  //       searchTerm: 'cricket', pageNumber: 1
  //     }
  //   });
  // }, []);

  return (<>
    <Box p={2}>
      <SearchBar color='primary' />
      <SearchTabs />
    </Box>
  </>)
}

export default Search;
