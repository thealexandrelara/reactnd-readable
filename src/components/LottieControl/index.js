import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

const LottieControl = ({ className, height, width, animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={className}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

LottieControl.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  animationData: PropTypes.object.isRequired,
};

export default LottieControl;
