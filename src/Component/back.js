import React, {Component} from 'react'

class Back extends Component{
	render(){
		return (
			<button className = "back" onClick={function(){
				this.props.onChange();
			}.bind(this)}>
				문제목록 보기
			</button>
		)
	}
} 


export default Back