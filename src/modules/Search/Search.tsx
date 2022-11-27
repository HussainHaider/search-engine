//React imports
import React, { ReactElement, ReactNode, SyntheticEvent, useEffect } from 'react'
//other third party imports
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Pagination from '@mui/material/Pagination';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//local imports
import * as actionTypes from '../../store/actionTypes/web';
import { useAppDispatch } from '../../app/hooks';


type ITabPanelProps = {
  children: ReactNode,
  value: number,
  index: number,
};

function TabPanel(props: ITabPanelProps): ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number): { id: string, 'aria-controls': string } {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Search = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: actionTypes.GET_IMAGES, payload: {
        searchTerm: 'cricket', pageNumber: 1
      }
    });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };


  return (<>
    <Box>
      <Autocomplete
        freeSolo
        fullWidth
        id="search-box"
        options={[
          { label: 'The Shawshank Redemption', year: 1994 },
          { label: 'The Godfather', year: 1972 }]}
        renderInput={(params) => <TextField {...params}
          placeholder="search the web"
        />}
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs aria-label="basic tabs example"
            onChange={handleChange}
            value={value}>
            <Tab
              icon={<LanguageIcon />}
              iconPosition="start"
              label="Web"
              {...a11yProps(0)}
            />
            <Tab
              icon={<ImageSearchIcon />}
              iconPosition="start"
              label="Images"
              {...a11yProps(1)}
            />
            <Tab
              icon={<NewspaperIcon />}
              iconPosition="start"
              label="News"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel index={0}
          value={value}>
          <Pagination count={10} />
        </TabPanel>
        <TabPanel index={1}
          value={value}>
          Add Masonry from react virtualized
        </TabPanel>
        <TabPanel index={2}
          value={value}>
        </TabPanel>
      </Box>
    </Box>
  </>)
}

export default Search;
