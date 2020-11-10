
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import * as ReactBootStrap from "react-bootstrap";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table"
import {Modal,Button} from "react-bootstrap"
import {Component } from 'react';
import store from '../store';


class Table extends Component { 
//   constructor(props){
//     super(props);
//     this.state = {
//       mode : 'table',
//       title: {
//         main : 'Problem list',
//         css : 'problist'
//       },
//       code : {
//         mode : 'dracular'
//       }
//   }  
// }
  render(){
    const options = {
      onRowClick : function(e) {
       // debugger;
        store.dispatch({type:'CODE',mode:'CODE',num:parseInt(e.Number),main_title:'Problem State'
      ,back:'back'})
    }.bind(this)
  }
      const problem = [
        {Number :"1", Name : "kruskal", Professor : "jh" ,Try: "1"},
        {Number :"2", Name : "prims", Professor : "jh" ,Try: "2"},
        {Number :"3", Name : "genetic algorithm", Professor : "jh" ,Try: "2"},
        {Number :"4", Name : "first choice", Professor : "jh" ,Try: "2"},
        {Number :"5", Name : "traveling sales", Professor : "jh" ,Try: "2"}
      ]
      return (
        <div className= "Table">
      <BootstrapTable data = {problem} striped = {true} hover={true} options = {options} >
        <TableHeaderColumn dataField='Number'isKey>Number</TableHeaderColumn>
        <TableHeaderColumn dataField='Name' >Name</TableHeaderColumn>
        <TableHeaderColumn dataField='Professor'>Professor</TableHeaderColumn>
        <TableHeaderColumn dataField='Try'>Try</TableHeaderColumn>
      </BootstrapTable>
      </div>

      )
      }
  }



export default Table;
