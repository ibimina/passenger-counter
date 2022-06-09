import React, { Component } from "react";
import Button from "./Button";
import { FaPalette } from "react-icons/fa";

class Main extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   state = {};
  render() {
    return (
      <main>  
        <div className="head">
          <p className="count">{this.props.number}</p>
          <FaPalette onClick={this.props.changeColor} className="icon" />
        </div>

        {/* <button onClick={this.props.resetNumber}>ce</button>
        <button onClick={this.props.decreaseNumber}>-</button>
        <button onClick={this.props.increaseNumber}>+</button> */}

        <Button
          className="btn clear"
          style={this.props.background}
          text="CE"
          onClick={this.props.resetNumber}
        />

        <div className="btn-wrap">
          <Button
            className="btn sub"
            text="-"
            onClick={this.props.decreaseNumber}
            style={this.props.background}
          />
          <Button
            className="btn add"
            style={this.props.background}
            text="+"
            onClick={this.props.increaseNumber}
          />
        </div>
        <Button
          className="btn save"
          text="Save"
          onClick={this.props.saveNumber}
          style={this.props.background}
        />
        <p className="display">{this.props.hello}</p>
      </main>
    );
  }
}

export default Main;
