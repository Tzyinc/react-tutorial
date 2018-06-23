import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
      </div>
    );
  }
}

const App = document.getElementById('app');

ReactDOM.render(<Homepage />, App);
