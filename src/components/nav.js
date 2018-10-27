import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Closer from './closer';
import { LIST_TYPES } from '../containers/item-list';

const Wrapper = styled.nav`
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${props => props.theme.colors.bkg};
  height: ${props => (props.isOpen ? '75px' : '0')};
  transition: ${props =>
    `height ${props.theme.durations.short} ${props.theme.curves.cubic}`};

  ul {
    position: relative;
    height: 100%;
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    > li {
      margin-right: 20px;
      > a {
        text-decoration: none;
        text-transform: capitalize;
        font-weight: bold;
        color: ${props => props.theme.colors.main};
        font-size: ${props => props.theme.text.size.large};
        transition: ${props =>
          `color ${props.theme.durations.short} ${props.theme.curves.cubic}`};

        &:hover,
        &:focus {
          color: ${props => props.theme.colors.loud};
        }
      }
    }
  }
`;

const Nav = ({ isOpen, onButtonClick }) => (
  <Wrapper isOpen={isOpen}>
    <ul>
      {Object.keys(LIST_TYPES).map(type => (
        <li key={type}>
          <Link to={`/${type}`}>{type}</Link>
        </li>
      ))}
    </ul>
    <Closer isHidden={!isOpen} onClick={onButtonClick}>
      />
    </Closer>
  </Wrapper>
);

Nav.propTypes = {
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func
};

export default Nav;
