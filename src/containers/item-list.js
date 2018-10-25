import React, { Component } from 'react';
import styled from 'styled-components';

import Axios from '../fetchers/axios';
import ListItem from '../components/list-item';

const LIST_TYPES = {
  top: 'top',
  best: 'best',
  new: 'new'
};

const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

class ItemList extends Component {
  state = {
    listType: LIST_TYPES.top
  };

  render() {
    return (
      <Axios url={`stories/${this.state.listType}`}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return <span>Loading</span>;
          } else if (error) {
            console.log(error);
            return <span>{error}</span>;
          }

          return Array.isArray(data) ? (
            <List>
              {data.map(item => (
                <ListItem key={item.id} {...item} />
              ))}
            </List>
          ) : null;
        }}
      </Axios>
    );
  }
}

export default ItemList;
