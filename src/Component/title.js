import React, {Component} from 'react'

import store from '../store';

class Title extends Component{
	state = {className:store.getState().title_css,
	title:store.getState().main_title,
	back:store.getState().back}
	constructor(props){
		super(props);
		store.subscribe(function(){
		this.setState({title:store.getState().main_title,
		back:store.getState().back})
	}.bind(this))

}

render(){

	return (
		<div>
		<h2 className={this.state.className} >{this.state.title}</h2>
		</div>
	)
}
}
export default Title;