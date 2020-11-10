import React, {Component} from 'react'
import store from '../store';
class Back2 extends Component{
	state = {mode : 'table'}
	render(){
		return (
			<button className = "back" onClick={function(){
				store.dispatch({type:'BACK2',submit:'YES'})
			}.bind(this)}>
				돌아가기
			</button>
		)
	}
} 


export default Back2