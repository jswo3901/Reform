import React from 'react';
import { Route, Link } from 'react-router-dom';


class Post extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>{this.props.match.params.title}</div>
    );
  }

}



class Posts extends React.Component {

  render() {
    return (
      <div>
        <h1>포스트</h1>
        <Link to="/posts/react">React</Link>
        <Link to="/posts/redux">Redux</Link>
        <Link to="/posts/relay">Relay</Link>
        <Route path="/posts/:title"
               component={Post}
        />
      </div>
    );
  }

}

export default Posts;
