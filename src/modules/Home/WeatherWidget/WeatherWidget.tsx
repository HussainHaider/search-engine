//React imports
import React, { ReactElement } from 'react';
//other third party imports
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// local imports
import { useAppSelector } from '../../../app/hooks';


const WeatherWidget = (): ReactElement => {
  const location = useAppSelector((state) => state.home.location);
  const weatherReport = useAppSelector((state) => state.home.weather);

  const lon = location.lon;
  const lat = location.lat;
  const weatherdiscription = weatherReport.condition.text;
  const temp = weatherReport.tempC;
  const pressure = weatherReport.pressure;
  const humidity = weatherReport.humidity;
  const wind = weatherReport.wind;
  const country = location.country;
  const city = location.name;
  const isDay = weatherReport.isDay;

  const color = isDay ? 'primary' : 'secondary';

  return (<WidgetWrapper isDay={isDay}>
    <CardContent>
      <Box display="flex"
        justifyContent="space-between"
      >
        <Box p={1}>
          <Typography color={color}
            variant="h2">
            {city},{country}
          </Typography>
          <Typography color={color}
            variant="caption">
            {lon}, {lat}
          </Typography>
        </Box>
        <Box p={1}>
          <Typography color={color}
            variant="h4">
            Temp: {temp}
            <span>&#176;</span>
            {'C'}
          </Typography>
          <Typography color={color}
            variant="h6">
            {weatherdiscription}
          </Typography>
        </Box>
      </Box>
    </CardContent>
    <CardContent>
      <Box display="flex"
        flexDirection="row">
        <Box p={1}>
          <Typography color={color}
            variant="h6">
            Humidity: {humidity} %
          </Typography>
        </Box>
        <Box p={1}>
          <Typography color={color}
            variant="h6">
            pressure: {pressure} pa
          </Typography>
        </Box>
        <Box p={1}>
          <Typography color={color}
            variant="h6">
            wind: {wind} km/h
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </WidgetWrapper>);
};

export default React.memo(WeatherWidget);

type WrapperProps = {
  theme?: Theme,
  isDay: number
}

const WidgetWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDay',
})(
  ({ theme, isDay }: WrapperProps) => ({
    marginRight: theme?.spacing(7),
    // changing backgound depending on the part of day
    background: isDay ? 'linear-gradient(45deg,#9bf8f4,#6f7bf7)' : 'linear-gradient(45deg,#0e0e11,#383c47)',
  }),
);
