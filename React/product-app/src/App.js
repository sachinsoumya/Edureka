import React, { Component } from 'react';
import  "./App.css";
// import { User } from './User';
import Header from './Header';
import JSON from './data.json';
import { ProductDisplay } from './ProductDisplay';
import { Footer } from './Footer';




export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productData:JSON,
      filterData:JSON,
    };
  }

  filterData = (keyword)=>{
    let output = this.state.productData.filter((data)=>{
      return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    console.log();
    this.setState({productData:output});
  }

  render() {
    return (
     <div className='App'>
       <Header  userInput = {(data)=>{
        return this.filterData(data);
       }}/>
       <ProductDisplay prodData={this.state.productData}/>
       <Footer year="2023" month="April"/>
     </div>

    )
  }
}


