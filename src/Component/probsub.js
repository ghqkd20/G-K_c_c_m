import React, {Component} from 'react'
import '../index.css';

class Probsub extends Component{
  render() {
  return(
  <div className = "content">
    <p> {this.props.content}</p>
  <br></br>
  <h2>Code Write </h2>
  </div>
  )
}
}


export default Probsub