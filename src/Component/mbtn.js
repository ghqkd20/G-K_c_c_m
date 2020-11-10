import React, {Component} from 'react'
import store from '../store';
class Mbtn extends Component{
	state = {mode : 'table'}
	render(){
		return (
			<button className = "back2" onClick={function(){
				store.dispatch({type:'MENTOR',mode:'MENTOR'})
			}.bind(this)}>
				  멘토링
			</button>
		)
	}
} 


export default Mbtn