import React, {Component} from 'react'
import store from '../store';

class Title extends Component{
	state = {className:store.getState().title_css,
			title:store.getState().main_title}
	constructor(props){
		super(props);
		store.subscribe(function(){
			this.setState({title:store.getState().main_title})
		}.bind(this))
	}
	render(){
	return (
		<h2 className={this.state.className} >{this.state.title}</h2>
  		)
		}
	}
 
 export default Title;
 