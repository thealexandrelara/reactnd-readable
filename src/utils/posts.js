import Fuse from 'fuse.js';

export const searchPosts = (posts, searchTerm) => {
  const options = {
    shouldSort: false,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['title', 'body', 'category', 'author'],
  };
  const fuse = new Fuse(posts, options);
  const result = fuse.search(searchTerm);

  return result;
};
