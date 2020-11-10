
import './App.css';
import React from 'react'
import {Component } from 'react';
import Title from './Component/title';
import Table from './Component/table';
import Code from './Component/codewrite'
import Back from './Component/back';
import Probsub from './Component/probsub';
import Select from './Component/select';
import './index.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      mode : 'table',
      num : "0",
      main_title : 'Problem list',
      title_css : 'code',
      theme : 'dracular'  ,
      content : 'this probelm is problem '
  }  
}
  render(){
    var two_mode = null;
      if(this.state.mode === 'table'){
          two_mode = <Table onRowChange={function(e){
            this.setState({mode : 'code',num: e})
            
          }.bind(this)}></Table>
      }
      else if(this.state.mode ==='code'){
        
        two_mode =<div><Probsub content={this.state.content}></Probsub>
        <Select onChangePage={function(e){
          this.setState({theme: e,main_title : "Problem State"})
        }.bind(this)}></Select>
        <Back onChange ={function(){
          this.setState({mode:'table'})
        }.bind(this)}></Back>
        <Code></Code></div>
      }
      return (
        <div>
          <Title title ={this.state.main_title} className = {this.state.title_css}></Title>
          {two_mode}
          </div> 
      )
      }
  }



export default App;
