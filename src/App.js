import React, { Component } from 'react';

import Router from './router';

import Themer from './pattern/themer';
import { Container } from './pattern/structure';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Themer>
        <Container>
          <Router>
            <Header logoText="HN" />
          </Router>
        </Container>
      </Themer>
    );
  }
}

export default App;
