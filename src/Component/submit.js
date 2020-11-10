import React, {Component} from 'react'
import store from '../store';
class Submit extends Component{
	state = {mode : 'table'}
	render(){
		return (
			<button className = "back" onClick={function(){
				alert('submit');
				store.dispatch({type:'SUBMIT',mode:'CODE'})
			}.bind(this)}>
				제출하기
			</button>
		)
	}
} 


export default Submit