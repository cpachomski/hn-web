import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Themer from '../pattern/themer';
import MenuToggle from './hamburger';
import Nav from './nav';

const Wrapper = styled.div`
  a {
    text-decoration: none;
    outline: none;

    &:hover,
    &:focus {
      > h1 {
        color: ${props => props.theme.colors.main};
      }
    }
  }
`;

const Row = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${props => props.theme.animation.fadeInDown}
    ${props => props.theme.durations.short} ${props => props.theme.curves.cubic}
    forwards;
`;

const Logo = styled.h1`
  margin: 10px 0px;
  color: ${props => props.theme.colors.loud};
  font-size: ${props => props.theme.text.size.extraLarge};
  font-family: 'Lucida Console', Monaco, monospace;
  transition: ${props =>
    `color ${props.theme.durations.short} ${props.theme.curves.cubic}`};
`;

class Header extends Component {
  state = {
    menuOpen: true
  };

  render() {
    return (
      <Themer.Controls>
        {({ toggleTheme }) => {
          return (
            <Wrapper>
              <Nav
                toggleTheme={toggleTheme}
                isOpen={this.state.menuOpen}
                onButtonClick={() => this.setState({ menuOpen: false })}
              />
              <Row>
                <Link to="/">
                  <Logo>{this.props.logoText}</Logo>
                </Link>
                <MenuToggle
                  onClick={() => {
                    this.setState({ menuOpen: true });
                  }}
                  isHidden={this.state.menuOpen}
                />
              </Row>
            </Wrapper>
          );
        }}
      </Themer.Controls>
    );
  }
}

Header.propTypes = {
  logoText: PropTypes.string
};

export default Header;
