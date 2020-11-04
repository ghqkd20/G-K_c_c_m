import React, {Component} from 'react'

class Select extends Component{
	render(){
		return (
			<select name = "test" onChange={function(e){
				//debugger;
				this.props.onChangePage(e.target.value);
			}.bind(this)}>
				<option value="eclipse" >eclipse</option>
				<option value="dracula" selected="selected">dracula</option>
			</select>
		)
	}
} 


export default Select