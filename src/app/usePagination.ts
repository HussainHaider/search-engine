import React from 'react';

const usePagination = (): [
  number,
  (e: React.ChangeEvent<unknown>, value: number) => void,
] => {
  const [page, setPage] = React.useState(1);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  return [page, handleChange];
};

export default usePagination;
