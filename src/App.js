import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      like : false
    }
  }

  handleClick(){
    this.setState({
      like: !this.state.like
    })
  }

  render() {
    console.log('function triggered')
    return (
      <button type="button"
          style = {this.state.like ? {color : "red"} : {color : "blue"}}
          onClick={() => this.handleClick()}
          >
        {this.state.like ? 'like' : 'unlike'}
      </button>
    );
  }
}

export default App;