import { Component } from 'react';
import PropTypes from 'prop-types';
import { default as fetch } from 'axios';

class Axios extends Component {
  static propTypes = {
    url: PropTypes.string
  };

  state = {
    data: null,
    loading: false,
    error: null
  };

  componentDidMount() {
    if (this.props.url) {
      this.request();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.refetch();
    }
  }

  request = () =>
    this.setState({ loading: true }, () =>
      fetch(this.props.url)
        .then(res => this.setState({ data: res.data, loading: false }))
        .catch(error => this.setState({ data: null, error }))
    );

  refetch = () => this.request();

  render() {
    return this.props.children({ ...this.state, refetch: this.refetch });
  }
}

export default Axios;
