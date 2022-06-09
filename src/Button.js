import React,{Component} from 'react'

class Button extends Component {
    state = {  } 
    render() { 
        return (
            <button  style={{backgroundColor: this.props.style}} className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}
 
export default Button;