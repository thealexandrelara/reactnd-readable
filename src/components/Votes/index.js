import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, VoteCount, Icon } from './styles';

const colors = {
  gray: '#c8c8c8',
  orange: '#fb3b23',
};

class Votes extends Component {
  static propTypes = {
    onVote: PropTypes.func.isRequired,
    voteScore: PropTypes.number,
    isComment: PropTypes.bool,
  };

  static defaultProps = {
    isComment: false,
    voteScore: 1,
  };

  state = {
    voteUpColor: colors.gray,
    voteDownColor: colors.gray,
  };

  handleVote = option => {
    const { onVote } = this.props;

    if (option === 'upVote') {
      this.setColor('voteUpColor', 'orange');
      setTimeout(() => this.setColor('voteUpColor', 'gray'), 250);
    } else {
      this.setColor('voteDownColor', 'orange');
      setTimeout(() => this.setColor('voteDownColor', 'gray'), 250);
    }

    onVote(option);
  };

  setColor = (voteColorKey, color) => {
    this.setState(() => ({ [voteColorKey]: colors[color] }));
  };

  render() {
    const { voteScore, onVote, isComment, ...rest } = this.props;
    const { voteUpColor, voteDownColor } = this.state;

    return (
      <Container {...rest}>
        <Icon
          type="caret-up"
          style={{
            fontSize: isComment ? '1rem' : '1.5rem',
            color: voteUpColor,
          }}
          onClick={() => this.handleVote('upVote')}
        />
        {!isComment && <VoteCount>{voteScore}</VoteCount>}
        <Icon
          type="caret-down"
          style={{
            fontSize: isComment ? '1rem' : '1.5rem',
            color: voteDownColor,
          }}
          onClick={() => this.handleVote('downVote')}
        />
      </Container>
    );
  }
}

export default Votes;
