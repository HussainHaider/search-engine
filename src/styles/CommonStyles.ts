import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

// all the styles that are used in more that one places can be put in this file so that we can reuse it in future
export const StyledPagination = styled(Pagination)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));
