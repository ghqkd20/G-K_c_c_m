import React, {Component} from 'react'
import store from '../store';
class Add extends Component{
		
	render(){
		return (
			<button className = "back" onClick={function(){
                var add = store.getState().add_mode
                console.log(add)
                if(add ==='yes'){
                    store.dispatch({type:'add',add_mode:'no'})
                    }
                else{
                    store.dispatch({type:'add',add_mode:'yes'})
                }    
			}.bind(this)}>
				문제추가하기
			</button>
		)
	}
} 


export default Add