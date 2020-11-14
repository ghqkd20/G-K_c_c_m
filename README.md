import React, {Component} from 'react'

import store from '../store';


class Title extends Component{
	state = {className:store.getState().title_css,
	title:store.getState().main_title,
	back:store.getState().back}
	constructor(props){
		super(props);
		store.subscribe(function(){
		this.setState({title:store.getState().main_title,
		back:store.getState().back})
	}.bind(this))

}
componentDidMount() {
	this.myclick()
	.then(function(data){
		alert(JSON.stringify(data));
	})
	.catch(err => console.log(err));
	}
	
	myclick = async() => {
		alert("zz");
		const response = await fetch('/run',{
			method: "POST",
			headers:{
				'Content-type' : 'application/json'
			},
			body : JSON.stringify({
				code : "#include <iostream>\n using namespace std;\n int main(){\n cout<<123;\n return 0;}",
				stdin : "0"
			})
		});
		const body = await response.json();
		return body;	
	}
render(){

	return (
		<div>
		<button id="hellobtn" onClick={this.myclick}>버튼!</button>
		<h2 className={this.state.className} >{this.state.title}</h2>
		</div>
	)
}
}
export default Title;
