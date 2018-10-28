import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Toggle = styled.button`
  background: none;
  position: relative;
  border: none;
  padding: 5px;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    > div {
      background-color: ${props => props.theme.colors.main};
    }

    > div:first-child {
      transform: ${props => (props.isHidden ? `scaleX(0)` : `scaleX(0.6)`)};
    }

    > div:nth-child(2) {
      transform: ${props => (props.isHidden ? `scaleX(0)` : `scaleX(0.8)`)};
    }
  }
`;

const Layer = styled.div`
  height: 5px;
  width: 40px;
  transform-origin: right;
  background-color: ${props => props.theme.colors.loud};
  transition: background-color, transform;
  transition-duration: ${props => props.theme.durations.short};
  transition-delay: ${props =>
    props.isHidden ? `${props.idx * 0.1}s` : `${-1 * props.idx * 0.1}s`};
  transition-timing-function: ${props => props.theme.curves.cubic};

  &:first-child,
  &:nth-child(2) {
    margin-bottom: 6px;
  }

  &:first-child,
  &:nth-child(2),
  &:nth-child(3) {
    transform: ${props => (props.isHidden ? `scaleX(0)` : `scaleX(1)`)};
  }
`;

const Hamburger = ({ isHidden, onClick }) => (
  <Toggle isHidden={isHidden} onClick={onClick}>
    {Array(3)
      .fill()
      .map((_, idx) => (
        <Layer idx={idx} key={`undersea-cheese-${idx}`} isHidden={isHidden} />
      ))}
  </Toggle>
);

Hamburger.propTypes = {
  isHidden: PropTypes.bool,
  onClick: PropTypes.func
};

export default Hamburger;
