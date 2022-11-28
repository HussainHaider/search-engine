/**
 * getPaginationCount gives the count to the pagination component to print numbers
 * @param  {number} count total number of items in data
 * @param  {number} pageSize query params in the API url. By default its 10
 * @return {number}
 */
export const getPaginationCount = (
  count: number,
  pageSize = 10,
): number => {
  let PaginationCount = Math.floor(count / pageSize);
  if (count % 10) PaginationCount += 1;
  return PaginationCount;
};

/**
 * openInNewTab redirects to some url in a new tab
 * @param  {string} url  where user want to redirects
 * @return {void}
 */
export const openInNewTab = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * extractContent gives the content from html.
 * @param  {string} html  html as string
 * @return {string | null} string if html contains some data otherwise null
 */
export const extractContent = (html: string): string | null => {
  return new DOMParser().parseFromString(html, 'text/html')
    .documentElement.textContent;
};
