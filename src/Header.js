import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.heading}</h2>
      </header>
    );
  }
}

export default Header;
