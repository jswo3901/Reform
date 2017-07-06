import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        홈
          <button onClick={()=>{this.props.history.push('./posts')}}>
          버튼
          </button>
      </div>

    );
  }
}

export default Home;
