//React imports
import React from 'react'
//other third party imports
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const Home = () => {
  return (
    <Box>
      <Autocomplete
        freeSolo
        id="search-box"
        options={[]}
        renderInput={(params) => <TextField {...params}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="search icon"
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>,
          }}
          placeholder="search the web"
        />}
      />
    </Box>
  )
}

export default Home
