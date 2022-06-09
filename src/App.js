import React, {Component} from "react";
import Header from "./Header";
import Main from "./Main";



class App extends Component {
  state = {
    number: 0,
    hello: "",
    background:"blue"

  };
  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decreaseNumber = () => {
    if (this.state.number>0) {
      this.setState({ number: this.state.number - 1 });
    } else {
      this.setState({ number: 0 });
    }
    
  };
  resetNumber = () => {
    this.setState({ number: 0 });
  };
  saveNumber = () => {
    if (this.state.hello === "") {
       this.setState({ hello: "Previous entries:" + this.state.number + " - "});
      // this.setState({ hello: this.state.number + " - " });
    } else if (!(this.state.hello === "")) {
      let old = this.state.hello;
      // let st = "Previous entries:";
      // this.setState({
      //   hello: old + "" + this.state.number + " - ",
      // });
      this.setState({
        hello: old + "" + this.state.number + " - ",
      });
    }
  };
changeColor=()=>{
  let r = Math.random()* 255;
   let g = Math.random() * 255;
    let b = Math.random() * 255;
    let rgb = `rgb(${r},${g},${b})`
    this.setState({ background: rgb})
}
  render() {
    const title = "Passenger Counter App";
    const heading = "Passenger enter";
    const number = this.state.number;
    const hello = this.state.hello;
const background = this.state.background
    return (
      // <div className="wrapper" style={{backgroundColor: this.changeColor()}}>
      <div className="wrapper" style={{ backgroundColor: background }}>
        <Header
          title={title}
          heading={heading}
        />
      
        <Main
          number={number}
          increaseNumber={this.increaseNumber}
          decreaseNumber={this.decreaseNumber}
          resetNumber={this.resetNumber}
          saveNumber={this.saveNumber}
          hello={hello}
          background={background}
          changeColor={this.changeColor}
        />
      </div>
    );
  }
}
 
export default App;
