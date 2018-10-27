import React, { Component } from 'react';
import styled from 'styled-components';

import Axios from '../fetchers/axios';
import ListItem from '../components/list-item';

export const LIST_TYPES = {
  top: 'top',
  best: 'best',
  new: 'new'
};

const ListHeader = styled.h2`
  margin: 15px 0px;
  display: inline-block;
  opacity: 0;
  text-transform: capitalize;
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.text.size.large};
  animation: ${props => props.theme.animation.fadeInDown}
    ${props => props.theme.durations.short} ${props => props.theme.delays.short}
    ${props => props.theme.curves.cubic} forwards;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

class ItemList extends Component {
  render() {
    return (
      <>
        <ListHeader>{this.props.match.params.listType}</ListHeader>
        <Axios url={`stories/${this.props.match.params.listType}`}>
          {({ data, loading, error, refetch }) => {
            if (loading) {
              return null;
            } else if (error) {
              console.log(error);
              return <span>{error}</span>;
            }

            return Array.isArray(data) ? (
              <List>
                {data.map((item, idx) => (
                  <ListItem idx={idx} key={item.id} {...item} />
                ))}
              </List>
            ) : null;
          }}
        </Axios>
      </>
    );
  }
}

export default ItemList;
