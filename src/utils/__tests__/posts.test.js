import { searchPosts } from '../posts';

describe('posts', () => {
  it('should handle return post from search', () => {
    const posts = [
      { title: 'React is awesome', body: 'I want to learn React' },
    ];
    const result = searchPosts(posts, 'react');

    expect(result).toHaveLength(1);
  });

  it('should not return post from search ', () => {
    const posts = [
      { title: 'React is awesome', body: 'I want to learn React' },
    ];
    const result = searchPosts(posts, '8394');

    expect(result).toHaveLength(0);
  });
});
