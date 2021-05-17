import React, { Component } from 'react';
import RequestForm from '../components/Display';
import Display from '../components/Display';
import apiUtils from '../services/apiUtils';

export default class Container extends Component {

    state = {
        url: '',
        body: '',
        method: '',
        array: []
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {

        event.preventDefault();
    
        const { url, body, method } = this.state;
        
        switch(method) {
          case 'get':
            getRequest(url)
              .then(res => this.setState({ array: res }));
            break;
          case 'post':
            postRequest(url, body);
            break;
          case 'delete':
            deleteRequest(url);
            break;
          case 'put':
            putRequest(url, body);
            break;
          default:
            console.error(
              'error'
            );
            break;
    }

    this.setState({
        url: '',
        body: '',
        method: '',
        array: []
      });
    }
  render() {
    console.log(this.state);
    const { url, body, array } = this.state;

    return (
      <div>
        <RequestForm url={url} onChange={this.handleChange} onSubmit={this.handleSubmit} body={body} />
        <Display array={array}/>
      </div>
    );
  }
}
