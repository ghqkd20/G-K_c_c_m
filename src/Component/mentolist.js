
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import * as ReactBootStrap from "react-bootstrap";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table"
import {Modal,Button} from "react-bootstrap"
import {Component } from 'react';

import store from '../store';



class Mentolist extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            mentolist: [],
            completed: 0,
            pro_number:store.getState().num
        }
    }

  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({mentolist: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/mentorings');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    const options = {
      onRowClick : function(e) {
       // debugger;
       const test = this.state.mentolist.filter(mento => mento.id === e.id);
       console.log(test[0].content);
        store.dispatch({type:'MENT',mode:'CODE',num:this.state.pro_number,main_title:test[0].name
      ,back:'back', content:test[0].content})
    }.bind(this)
  }
  
      return (
        <div className= "Mentolist">
      <BootstrapTable data = {this.state.mentolist ? this.state.mentolist.map(c => {
          return( 
                {
                id: c.id,
                number: c.number,
                name: c.name,
              }
              );
            }).filter(list => list.number === this.state.pro_number) :""} striped = {true} hover={true} options = {options} >
        <TableHeaderColumn dataField='id'isKey >INDEX</TableHeaderColumn>        
        <TableHeaderColumn dataField='name' >Question</TableHeaderColumn>
        
      </BootstrapTable>
      </div>

      )
      }
  }



export default Mentolist;
