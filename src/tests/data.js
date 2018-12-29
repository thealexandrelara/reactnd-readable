import createMockStore from 'redux-mock-store';

const mockStore = createMockStore();

export const store = mockStore({
  categories: {
    data: [
      { path: 'react', name: 'react' },
      { path: 'redux', name: 'redux' },
      { path: 'udacity', name: 'udacity' },
    ],
    loading: false,
  },
  posts: {
    byId: {
      '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
    },
    listsByCategory: {
      ids: {
        all: ['8xf0y6ziyjabvozdd253nd'],
        react: ['8xf0y6ziyjabvozdd253nd'],
      },
    },
  },
  comments: {
    byId: {
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    },
    listsByPostId: {
      ids: {
        '8xf0y6ziyjabvozdd253nd': [
          '8tu4bsun805n8un48ve89',
          '894tuq4ut84ut8v4t8wun89g',
        ],
      },
    },
  },
});

export const loadingStore = mockStore({
  categories: {
    data: [
      { path: 'react', name: 'react' },
      { path: 'redux', name: 'redux' },
      { path: 'udacity', name: 'udacity' },
    ],
    loading: true,
  },
  posts: {
    byId: {
      '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
    },
    listsByCategory: {
      all: ['8xf0y6ziyjabvozdd253nd'],
      react: ['8xf0y6ziyjabvozdd253nd'],
    },
  },
  comments: {
    byId: {
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    },
    listsByPostId: {
      ids: {
        '8xf0y6ziyjabvozdd253nd': [
          '8tu4bsun805n8un48ve89',
          '894tuq4ut84ut8v4t8wun89g',
        ],
      },
    },
  },
});
