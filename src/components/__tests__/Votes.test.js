import React from 'react';
import { mount, shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import Votes from '../Votes';
import { Icon, VoteCount } from '../Votes/styles';

const mockStore = createMockStore();
const store = mockStore({});

describe('Votes component', () => {
  it('should renders votes as expected', () => {
    const voteScore = 10;
    const isComment = false;
    const onVote = () => ({});

    const wrapper = mount(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );

    expect(wrapper.find(Icon)).toHaveLength(2);
  });

  it('should not renders VoteCount when is comment', () => {
    const voteScore = 10;
    const isComment = true;
    const onVote = () => ({});

    const wrapper = mount(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );
    expect(wrapper.find(VoteCount)).toHaveLength(0);
  });

  it('should handle vote up', () => {
    const voteScore = 10;
    const isComment = true;
    const onVote = sinon.spy();

    const wrapper = shallow(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );

    wrapper.instance().handleVote('upVote');

    expect(onVote.calledOnce).toBe(true);
  });

  it('should handle vote down', () => {
    const voteScore = 10;
    const isComment = true;
    const onVote = sinon.spy();

    const wrapper = shallow(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );

    wrapper.instance().handleVote('downVote');

    expect(onVote.calledOnce).toBe(true);
  });

  it('should click vote up', () => {
    const voteScore = 10;
    const isComment = true;
    const onVote = sinon.spy();

    const wrapper = shallow(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );

    wrapper
      .find(Icon)
      .first()
      .simulate('click');

    expect(onVote.calledOnce).toBe(true);
  });

  it('should click vote down', () => {
    const voteScore = 10;
    const isComment = true;
    const onVote = sinon.spy();

    const wrapper = shallow(
      <Votes voteScore={voteScore} isComment={isComment} onVote={onVote} />,
    );

    wrapper
      .find(Icon)
      .at(1)
      .simulate('click');

    expect(onVote.calledOnce).toBe(true);
  });
});
