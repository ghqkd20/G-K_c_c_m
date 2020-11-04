import React, {Component} from 'react'

class Select extends Component{
	render(){
		return (
			<select onChange={function(e){
				debugger;
				this.props.onChangePage(e.attributes.Value.nodeValue);
			}.bind(this)}>
				<option value="eclipse" >eclipse</option>
				<option value="dracula" selected="selected">dracula</option>
			</select>
		)
	}
} 


export default Select