//React imports
import React, { ReactElement, useEffect } from 'react';
//other third party imports
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// local imports
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GET_WEATHER } from '../../../store/actionTypes/home';

const WeatherWidget = (): ReactElement => {
  const dispatch = useAppDispatch();
  const weatherReport = useAppSelector((state) => state.home.weather);

  useEffect(() => {
    dispatch({
      type: GET_WEATHER,
      payload: {
        searchTerm: 'Lahore'
      }
    })
  }, [])

  const lon = weatherReport.location.lon;
  const lat = weatherReport.location.lat;
  const weatherdiscription = weatherReport.condition.text;
  const temp = weatherReport.tempC;
  const pressure = weatherReport.pressure;
  const humidity = weatherReport.humidity;
  const wind = weatherReport.wind;
  const country = weatherReport.location.country;
  const city = weatherReport.location.name;
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

export default WeatherWidget;

type WrapperProps = {
  theme?: Theme,
  isDay: number
}

const WidgetWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDay',
})(
  ({ theme, isDay }: WrapperProps) => ({
    marginRight: theme?.spacing(7),
    background: isDay ? 'linear-gradient(45deg,#9bf8f4,#6f7bf7)' : 'linear-gradient(45deg,#0e0e11,#383c47)',
  }),
);
