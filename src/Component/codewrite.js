
import {UnControlled as CodeMirror} from 'react-codemirror2'
import React from 'react';
import { Component } from 'react';
import Select from './select';
import store from '../store';
import '../index.css';
import MDEditor from './mdEditor';

require('codemirror/addon/hint/show-hint.css');
require('codemirror/mode/clike/clike');
require('codemirror/mode/cmake/cmake');
require('codemirror/mode/python/python');
require('codemirror/mode/r/r');
require('codemirror/mode/php/php');
require('codemirror/mode/go/go');
require('codemirror/mode/vue/vue');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/anyword-hint');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/edit/matchbrackets');


class Code extends Component{
	
   state = {theme:store.getState().theme,mode:store.getState().code_mode}
	constructor(props){
      super(props);
      store.subscribe(function(){
         this.setState({theme:store.getState().theme,mode:store.getState().code_mode});
      }.bind(this))
   }
	render(){

	return (
		
		<div className ="Code">
			
		<CodeMirror
			
			value={'<h1>I react-codemirror2</h1>'}
			options={{lineNumbers: true,
			mode: this.state.mode,
			theme : this.state.theme,
			gutters:["CodeMirror-lint-markers"],
			lint: true,
			smartIndent : true,   // maybe set line start point
			styleActiveLine: true,//current line active
			matchBrackets: true,  //brakects(){}... match
			cursorBlinkRate : 0,  //No cursor blink
			cursorHeight : 0.85,
			autocorrect : true,   // ?
			lineWrapping : true,  //auto line break?
			extraKeys: {          //auto completion
				"Ctrl-Space": 'autocomplete'
				}
			}}
			autoFocus={true}
			onChange={(editor, data, value) => {
			}}
			/>
			<button className="compile">Compile</button>
			</div>
		)
		}
	}
 
 export default Code;
 