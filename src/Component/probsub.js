import React, {Component} from 'react'
import '../index.css';
import store from '../store';

class Probsub extends Component{

  state ={content:store.getState().content}
  constructor(props){
    super(props); 
    store.subscribe(function(){
     // var num = store.getState().num;
      this.setState({content:store.getState().content})
    }.bind(this))
  }
  render() {

   
  
  return(
  <div className = "content">
    <p> {this.state.content}</p>
  <br></br>
  </div>
  )
}
}




export default Probsub