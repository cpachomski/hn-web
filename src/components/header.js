import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../pattern/detail';
import Themer from '../pattern/themer';
import MenuToggle from './menu-toggle';

const Row = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.nav`
  display: block;
  min-height: 30px;
  background-color: red;
`;

const Logo = styled.h1`
  margin: 10px 0px;
  color: ${colors.orange};
  font-size: 5em;
  font-family: 'Lucida Console', Monaco, monospace;
`;

class Header extends Component {
  state = {
    menuOpen: false
  };

  render() {
    return (
      <Themer.Controls>
        {({ toggleTheme }) => {
          return (
            <div>
              {/* <Menu /> */}
              <Row>
                <Logo>{this.props.logoText}</Logo>
                <MenuToggle
                  onClick={() => {
                    this.setState({ menuOpen: true });
                  }}
                  isHidden={this.state.menuOpen}
                />
              </Row>
            </div>
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
