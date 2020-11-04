import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import * as ReactBootStrap from "react-bootstrap";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table"
import {Modal,Button} from "react-bootstrap"
import { Component } from 'react';
import Code from './table'
import TableBody from './code';
/*
const options = {
  onRowClick: function(){
    alert('hi');
      return (
      <div className="App">    	
		  <div style="float: left; margin-left: 80px;">
      <h2 style="margin-top: 30px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">문제 설명</h2>
      <p style="width: 600px;">You can try any problem and inquire to many smart professors.
      how about this tttttttttt</p>
      </div>
      
    <div style="width: 900px; margin-left: 500px;">
     <h4 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; margin-top: 30px;margin-bottom: 10px;">Code input</h4> 
      <textarea name="script" id="editor" style="float:right;"/>
    </div>
    
  </div>
      ) 
    }
};

class app2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      click : 'no'
    }
  }
    render(){
      const click = this.state.click;
      return(
        <div>
          click
        </div>
      )
    }
  }
*/
class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      modee : 'table',
    }
  }  
 

  render(){
    const options = {
      onRowClick : function te() {
        ReactDOM.render(
          <TableBody/>,document.getElementById('root2')
        )
        ReactDOM.render(
          <Code/>,
        document.getElementById('root'));
      }
    }
    
      const problem = [
        {Number :"1", Name : "kruskal", Professor : "jh" ,Try: "1"},
        {Number :"2", Name : "prims", Professor : "jh" ,Try: "2"},
        {Number :"3", Name : "genetic algorithm", Professor : "jh" ,Try: "2"},
        {Number :"4", Name : "first choice", Professor : "jh" ,Try: "2"},
        {Number :"5", Name : "traveling sales", Professor : "jh" ,Try: "2"}
      ]
      return (
        
      <BootstrapTable data = {problem} striped = {true} hover={true} options = {options} >
        <TableHeaderColumn dataField='Number'isKey>Number</TableHeaderColumn>
        <TableHeaderColumn dataField='Name' >Name</TableHeaderColumn>
        <TableHeaderColumn dataField='Professor'>Professor</TableHeaderColumn>
        <TableHeaderColumn dataField='Try'>Try</TableHeaderColumn>
      </BootstrapTable>
     

      )
      }
  }



export default App;
