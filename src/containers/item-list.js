import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Axios from '../fetchers/axios';

const LIST_TYPES = {
  top: 'top',
  best: 'best',
  new: 'new'
};

class ItemList extends Component {
  state = {
    listType: LIST_TYPES.top
  };

  render() {
    return (
      <Axios
        url={`http://hacker-news-api-dev.us-east-1.elasticbeanstalk.com/stories/${
          this.state.listType
        }`}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return <span>Loading</span>;
          } else if (error) {
            console.log(error);
            return <span>{error}</span>;
          }

          return Array.isArray(data) ? (
            <p>
              <ul>
                {data.map(item => (
                  <li>{JSON.stringify(item)}</li>
                ))}
              </ul>
              <button onClick={refetch}>Refresh</button>
            </p>
          ) : null;
        }}
      </Axios>
    );
  }
}

export default ItemList;
