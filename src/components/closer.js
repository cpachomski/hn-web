import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Toggle = styled.button`
  position: relative;
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
  background: none;

  &:hover,
  &:focus {
    cursor: pointer;

    div {
      background-color: ${props => props.theme.colors.loud};
    }
  }
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5px;
  width: 100%;
  background-color: ${props => props.theme.colors.main};
  transform-origin: center;
  transition: ${props =>
    `transform ${props.theme.durations.short} ${props.theme.curves.cubic}`};

  &:first-child {
    transform: ${props =>
      props.isHidden
        ? 'translate(-50%, -50%) rotate(-45deg) scaleX(0)'
        : 'translate(-50%, -50%) rotate(-45deg)  scaleX(1)'};
  }

  &:nth-child(2) {
    transform: ${props =>
      props.isHidden
        ? 'translate(-50%, -50%) rotate(-45deg) scaleX(0)'
        : 'translate(-50%, -50%) rotate(45deg)  scaleX(1)'};
  }
`;

const Closer = ({ isHidden, onClick }) => (
  <Toggle onClick={onClick}>
    <Line isHidden={isHidden} />
    <Line isHidden={isHidden} />
  </Toggle>
);

Closer.propTypes = {
  isHidden: PropTypes.bool,
  onClick: PropTypes.func
};

export default Closer;
