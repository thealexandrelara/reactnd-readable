export const getCategoryFromUrlPath = match => {
  if (match.params && match.params.categoryId) {
    return match.params.categoryId;
  } else if (match.path === '/') {
    return 'all';
  } else {
    return '';
  }
};
