import React from 'react';
import Moment from 'react-moment';
import { Spring } from 'react-spring';
import { Container } from './styles';
import Info from './Info';

const Footer = ({ commentCount, timestamp, ...rest }) => (
  <Container {...rest}>
    <Info iconName="clock-circle" text={<Moment fromNow>{timestamp}</Moment>} />
    <Spring
      from={{ number: 0 }}
      to={{ number: commentCount }}
      config={{ precision: 1 }}
    >
      {props => (
        <>
          <Info
            iconName="message"
            text={
              props.number === 1
                ? `${parseInt(props.number)} comment`
                : `${parseInt(props.number)} comments`
            }
          />
        </>
      )}
    </Spring>
  </Container>
);

export default Footer;
