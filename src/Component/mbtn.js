import React, {Component} from 'react'
import store from '../store';
class Mbtn extends Component{
	state = {
		mode : 'table',
		pro_number:store.getState().num
	}
	render(){
		return (
			<button className = "back2" onClick={function(){
				store.dispatch({type:'MENTOR',mode:'MENTOR',num:this.state.pro_number})
			}.bind(this)}>
				  멘토링
			</button>
		)
	}
} 


export default Mbtn