//React imports
import React, { ReactElement } from 'react'
//other third party imports
import Box from '@mui/material/Box';
//local imports
import SearchBar from '../Common/SearchBar/SearchBar';
import SearchTabs from './SearchTabs/SearchTabs';


const Search = (): ReactElement => {
  return (<>
    <Box p={2}>
      <SearchBar color='primary' />
      <SearchTabs />
    </Box>
  </>)
}

export default Search;
