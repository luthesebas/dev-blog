export interface ArticleSearch {
  query?: string;
}

export const equalsArticleSearch = (x: ArticleSearch, y: ArticleSearch) => {
  return (x.query?.trim() === y.query?.trim());
};

export const filterByArticleSearch = (search: ArticleSearch, values: string[]) => {
  const filterValue = search.query?.toLowerCase() ?? '';
  return values.filter(value => value.toLowerCase().includes(filterValue));
};
