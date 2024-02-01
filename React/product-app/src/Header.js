import React, { Component } from 'react'

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            title:"React App",
            keyword:'User text',

        };
    }

      handleChange = (e) =>{
        console.log(e.target.value);
        this.setState ({
            keyword:e.target.value ? e.target.value : "User text",
        });
        this.props.userInput(e.target.value);
    };
  render() {
    return (
        <>
         <div className='logo'>{this.state.title}</div>
         <input type="text" onChange={this.handleChange}/>
         <div>{this.state.keyword}</div>
        </>
     
    )
  }
}
