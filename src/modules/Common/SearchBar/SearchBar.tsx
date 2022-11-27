//React imports
import React, { ReactElement, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
//other third party imports
import Autocomplete from '@mui/material/Autocomplete';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// local imports
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearAutoComplete } from '../../../store/reducers/webSlice';
import { SEARCH } from '../../../constants/urlConstant';

const SearchBar = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const suggestions = useAppSelector((state) => state.web.autoComplete.data);
  return (<Autocomplete
    freeSolo
    fullWidth
    id="search-box"
    onChange={(event: SyntheticEvent, value: string | null): void => {
      if (value) {
        navigate(`${SEARCH}?q=${value}`);
      }
    }}
    onInputChange={(event: SyntheticEvent, value: string, reason: string): void => {
      if (reason === 'clear' || value === '')
        dispatch(clearAutoComplete());
    }}
    options={suggestions}
    renderInput={(params): ReactElement => <StyledTextField {...params}
      color='secondary'
      focused
      label="search the web"
    />}
    renderOption={(props, option, { inputValue }) => {
      const matches = match(option, inputValue, { insideWords: true });
      const parts = parse(option, matches);

      return (
        <li {...props}>
          <div>
            {parts.map((part: {
              text: string,
              highlight: boolean
            }, index: number) => (
              <span
                key={index}
                style={{
                  fontWeight: part.highlight ? 700 : 400,
                }}
              >
                {part.text}
              </span>
            ))}
          </div>
        </li>
      );
    }}
    sx={{ width: '60%' }}
  />)
}

export default SearchBar;

const StyledTextField = styled(TextField)(
  ({ theme }) => ({
    'input': {
      color: theme.palette.secondary.main,
    }
  }),
);
