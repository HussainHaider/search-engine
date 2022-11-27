export const getPaginationCount = (count: number): number => {
  let PaginationCount = Math.floor(count / 10);
  if (count % 10) PaginationCount += 1;
  return PaginationCount;
};
