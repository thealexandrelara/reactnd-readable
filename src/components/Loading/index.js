import React from 'react';
import PropTypes from 'prop-types';
import LottieControl from '../LottieControl';

import animationData from '../../assets/animations/box_creeper.json';

const Loading = ({ className }) => (
  <LottieControl
    className={className}
    animationData={animationData}
    height="70%"
    width="70%"
  />
);

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: undefined,
};

export default Loading;
