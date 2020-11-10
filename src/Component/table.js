
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import * as ReactBootStrap from "react-bootstrap";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table"
import {Modal,Button} from "react-bootstrap"
import {Component } from 'react';
<<<<<<< HEAD
import Problem from './Problems';
=======
import store from '../store';


>>>>>>> 400953496cafa521bac530630263ef3a710bd290
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
<<<<<<< HEAD
  state = {
    problems: "",
    completed: 0
  }

  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({problems: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/problems');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }
=======
>>>>>>> 400953496cafa521bac530630263ef3a710bd290
  render(){
    const options = {
      onRowClick : function(e) {
       // debugger;
        store.dispatch({type:'CODE',mode:'CODE',num:parseInt(e.Number),main_title:'Problem State'
      ,back:'back'})
    }.bind(this)
  }
  
      return (
        <div className= "Table">
      <BootstrapTable data = {this.state.problems ? this.state.problems.map(c => {
            return(
                {number: c.number,
                 name: c.name,
                 professor: c.professor,
                 try: c.try
              }
              );
            }) :""} striped = {true} hover={true} options = {options} >
        <TableHeaderColumn dataField='number'isKey>Number</TableHeaderColumn>
        <TableHeaderColumn dataField='name' >Name</TableHeaderColumn>
        <TableHeaderColumn dataField='professor'>Professor</TableHeaderColumn>
        <TableHeaderColumn dataField='try'>Try</TableHeaderColumn>
      </BootstrapTable>
      </div>

      )
      }
  }



export default Table;
