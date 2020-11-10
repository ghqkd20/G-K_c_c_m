import React, {Component} from 'react'

class Board extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}ㄴ
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


export default Board