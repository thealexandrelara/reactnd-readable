import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Footer from '../Footer';
import Info from '../Footer/Info';

describe('Footer component', () => {
  it('should renders Info as expected', () => {
    const commentCount = 10;
    const timestamp = 52344355;
    const handleDelete = () => ({});
    const handleEdit = () => ({});

    const wrapper = mount(
      <Footer
        commentCount={commentCount}
        timestamp={timestamp}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />,
    );

    expect(wrapper.find(Info)).toHaveLength(2);
  });
});
