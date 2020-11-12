import React, {Component} from 'react'
import store from '../store';
class Mbtn extends Component{
	_isMounted = false;
	state = {
		mode : 'table',
		isLoading :true,
		pro_number:store.getState().num
	}
	render(){
		return (
			<button className = "back" onClick={function(){
				this._isMounted = true;
				if(this._isMounted){
					this.setState({isLoading:false})
				}
				store.dispatch({type:'MENTOR',mode:'MENTOR',num:this.state.pro_number})
			}.bind(this)}>
				  질문하기
			</button>
		)
	}
} 


export default Mbtn