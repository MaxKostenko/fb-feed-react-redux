import React, {
  Component
}
from 'react';
import {
  Link,
  browserHistory
}
from 'react-router';

export default class M extends Component {

  onClick() {
    browserHistory.push('/');
  }
  
  render() {
    return (
      <div>
        <div><Link to={`/`}>Go To Index</Link></div>
        <button onClick={::this.onClick}>GO</button>
      </div>
    );
  }
}