import React, {Component} from 'react'
import '../index.css';
import store from '../store';

class Mentsub extends Component{

  state ={title:store.getState().ment_title,
    content:store.getState().ment_content}
  constructor(props){
    super(props); 
  }
  render() {
    function createMarkup(content){
      return {__html : content}
    }
  
    return(
    <div>
      <h2 className = "code">{this.state.title}</h2>
      <div dangerouslySetInnerHTML={createMarkup(this.state.content)}/>

      </div>
  )
}
}




export default Mentsub