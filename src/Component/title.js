import React, {Component} from 'react'


class Title extends Component{
	
	render(){
	return (
		<h2 className={this.props.className} >{this.props.title}</h2>
  		)
		}
	}
 
 export default Title;
 