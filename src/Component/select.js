import React, {Component} from 'react'
import store from '../store';

class Select extends Component{

	render(){
		return (
			<select name = "test" onChange={function(e){
				debugger;
				var theme = e.target.value;
				store.dispatch({type:'SELECT',theme:theme})
			}.bind(this)}>
				<option value="eclipse" >eclipse</option>
				<option value="dracula" selected="selected">dracula</option>
			</select>
		)
	}
} 


export default Select