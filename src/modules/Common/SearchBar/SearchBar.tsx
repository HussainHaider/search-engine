//React imports
import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
//other third party imports
import Autocomplete from '@mui/material/Autocomplete';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// local imports
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearAutoComplete } from '../../../store/reducers/webSlice';
import { GET_SEARCH_SUGGESTIONS } from '../../../store/actionTypes/web';
import { SEARCH } from '../../../constants/urlConstant';


type SearchBarProps = {
  color: 'primary' | 'secondary',
}

const SearchBar = (props: SearchBarProps): ReactElement => {
  //props
  const { color } = props;
  // hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const suggestions = useAppSelector((state) => state.web.autoComplete.data);
  const [searchParams] = useSearchParams();
  //states
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');

  return (<Autocomplete
    freeSolo
    fullWidth
    id="search-box"
    inputValue={inputValue}
    onChange={(event: SyntheticEvent, value: string | null): void => {
      if (value) {
        navigate(`${SEARCH}?q=${value}`);
      }
    }}
    onInputChange={(event: SyntheticEvent, value: string, reason: string): void => {
      if (reason === 'clear' || value === '')
        dispatch(clearAutoComplete());
      else {
        dispatch({ type: GET_SEARCH_SUGGESTIONS, payload: { searchTerm: value } });
      }
      setInputValue(value);
    }}
    options={suggestions}
    renderInput={(params): ReactElement => <StyledTextField {...params}
      color={color}
      focused
      label="search the web"
    />}
    renderOption={(props, option, { inputValue }): ReactElement => {
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

export default React.memo(SearchBar);

const StyledTextField = styled(TextField)(
  ({ theme, color }) => ({
    'input': {
      color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.main,
    }
  }),
);
