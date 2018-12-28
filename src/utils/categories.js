export const getCategoryFromUrlPath = match => {
  if (match.params && match.params.categoryId) {
    return match.params.categoryId;
  }
  if (match.path === '/') {
    return 'all';
  }
  return '';
};
