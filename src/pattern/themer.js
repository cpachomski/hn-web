import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './detail';

const ThemeControl = React.createContext();

class Themer extends Component {
  static Controls = ThemeControl.Consumer;

  state = {
    controls: {
      toggleTheme: this.toggleTheme
    },
    theme: themes.light
  };

  componentDidMount() {
    document.body.style.transition = `background-color ${
      this.state.theme.durations.medium
    } ${this.state.theme.curves.cubic}`;
  }

  toggleTheme = () =>
    this.setState(
      {
        theme:
          this.state.theme.name === themes.light.name
            ? themes.dark
            : themes.light
      },
      () => {
        document.body.style.backgroundColor = this.state.theme.bkg;
      }
    );

  render() {
    return (
      <ThemeControl.Provider value={{ toggleTheme: this.toggleTheme }}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </ThemeControl.Provider>
    );
  }
}

export default Themer;
