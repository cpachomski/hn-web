import React, { Component } from 'react';

import Themer from './pattern/themer';
import { Container } from './pattern/structure';
import Header from './components/header';
import ItemList from './containers/item-list';

class App extends Component {
  render() {
    return (
      <Themer>
        <Container>
          <Header logoText="HN" />
          <ItemList />
        </Container>
      </Themer>
    );
  }
}

export default App;
