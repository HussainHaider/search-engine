//React imports
import React, { ReactElement, ReactNode, SyntheticEvent } from 'react';
//other third party imports
import Box from '@mui/material/Box';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Pagination from '@mui/material/Pagination';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
//local imports
import NewsBox from './NewsBox/NewsBox';


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
          {children}
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

const SearchTabs = (): ReactElement => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };


  return (
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
        <Typography>Add Masonry from react virtualized</Typography>
      </TabPanel>
      <TabPanel index={2}
        value={value}>
        <NewsBox />
      </TabPanel>
    </Box>)
}

export default SearchTabs;

