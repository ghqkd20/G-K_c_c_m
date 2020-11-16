import React, {Component} from 'react'
import store from '../store';
class Back extends Component{
	state = {mode : 'table'}
	render(){
		return (
			<button className = "back" onClick={function(){
				store.dispatch({type:'BACK',mode:'table', add_mode:'no'})
			}.bind(this)}>
				돌아가기
			</button>
		)
	}
} 


export default Back