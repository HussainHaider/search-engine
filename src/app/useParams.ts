import { useEffect } from 'react';
//other third party imports
import { useSearchParams } from 'react-router-dom';
//local imports
import { useAppDispatch } from './hooks';

const useParams = (type: string): [string] => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (searchTerm) {
      dispatch({
        type: type,
        payload: {
          searchTerm: searchParams.get('q'),
          pageNumber: 1,
        },
      });
    }
  }, [searchTerm]);

  return [searchTerm];
};

export default useParams;
