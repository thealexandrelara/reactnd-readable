import { getCategoryFromUrlPath } from '../categories';

describe('categories', () => {
  it('should handle initial path', () => {
    const match = {
      path: '/',
    };
    const category = getCategoryFromUrlPath(match);

    expect(category).toEqual('all');
  });

  it('should handle no path ', () => {
    const match = {};
    const category = getCategoryFromUrlPath(match);

    expect(category).toEqual('');
  });
});
