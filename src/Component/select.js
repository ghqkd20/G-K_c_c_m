import React, {Component} from 'react'
import store from '../store';

class Select extends Component{

	state = {theme : 'dracula',mode : store.getState().code_mode}
	render(){
		return (<div className = "inn">
  			<h3>Code Write </h3>
			<label className ="sel1" for="theme">Theme : </label>
			<select name = "test" id = "theme" onChange={function(e){
				var mode = this.state.mode;
				var theme = e.target.value
				this.setState({theme:theme})
				store.dispatch({type:'SELECT',theme:theme,mode:mode})
			}.bind(this)}>
				<option value="yonce" >yonce</option>
				<option value="icecoder" >icecoder</option>
				<option value="hopscotch" >hopscotch</option>
				<option value="blackboard" selected="selected" >blackboard</option>
				<option value="rubyblue" >rubyblue</option>
				<option value="eclipse" >eclipse</option>
				<option value="dracula">dracula</option>
			</select>

			<label className ="sel1" for="Mode">Mode : </label>
			<select name = "test2" id = "Mode" onChange={function(e){
				var theme = this.state.theme
				var mode = e.target.value;
				this.setState({mode:mode})
				store.dispatch({type:'SELECT',theme:theme,mode:mode})
			}.bind(this)}>
				<option value="python" >python</option>
				<option value="text/x-csrc" >c</option>
				<option value="text/x-c++src"selected="selected" >c++</option>
			</select>
			</div>
		)
	}
} 


export default Select