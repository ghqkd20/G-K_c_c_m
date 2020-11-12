import React, {Component} from 'react'
import store from '../store';
class Back2 extends Component{
	_isMounted = false;
	state = {mode : 'table',
		isLoading :true}

		
	render(){
		return (
			<button className = "back" onClick={function(){
				this._isMounted = true;
				if(this._isMounted){
					this.setState({isLoading:false})
				}
				store.dispatch({type:'BACK2',math_mode:'no'})
			}.bind(this)}>
				돌아가기
			</button>
		)
	}
} 


export default Back2