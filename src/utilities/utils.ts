export const getPaginationCount = (count: number): number => {
  let PaginationCount = Math.floor(count / 10);
  if (count % 10) PaginationCount += 1;
  return PaginationCount;
};

export const openInNewTab = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const extractContent = (html: string): string | null => {
  return new DOMParser().parseFromString(html, 'text/html')
    .documentElement.textContent;
};
