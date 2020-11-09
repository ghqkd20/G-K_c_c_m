
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

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/anyword-hint');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/edit/matchbrackets');


class Code extends Component{
	
   state = {theme:store.getState().theme}
	constructor(props){
      super(props);
      store.subscribe(function(){
         this.setState({theme:store.getState().theme});
      }.bind(this))
   }
	render(){

	return (
		
		<div className ="Code">
		<CodeMirror
			
			value={'<h1>I react-codemirror2</h1>'}
			options={{lineNumbers: true,
			mode: 'javascript',
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
         <MDEditor/>
			</div>
		)
		}
	}
 
 export default Code;
 
// /*
// function code(options){
//    /*var autocomplete = function(cm) { 
//       cm.showHint({ 
//         hint: CodeMirror.
//       }); 
//      }; */

//      var themeChangeListener = function(obj){
//         var selectTheme = obj.target.value;
//       //alert(obj.value);
//       if(selectTheme == "eclipse"){
//         //alert(selectTheme);
//          //mytheme = 'eclipse';
//          CodeMirror.props.setOption('theme','eclipse');
//       }
//       else if( selectTheme == "dracula"){
//          //alert(selectTheme);
//          //mytheme = 'darcula';
//          CodeMirror.props.setOption('theme','dracula');
//       }

//      }
//    return (
//       <div>
//       <select onChange={themeChangeListener.bind(this)}>
//          <option value="eclipse" >eclipse</option>
//          <option value="dracula" selected="selected">dracula</option>
//         </select>
//         <CodeMirror
// value={'<h1>I react-codemirror2</h1>'}
// options={{lineNumbers: true,
//   mode: 'javascript',
//   theme : 'dracula',
//   gutters:["CodeMirror-lint-markers"],
//   lint: true,
//   smartIndent : true,   // maybe set line start point
//   styleActiveLine: true,//current line active
//   matchBrackets: true,  //brakects(){}... match
//   cursorBlinkRate : 0,  //No cursor blink
//   cursorHeight : 0.85,
//   autocorrect : true,   // ?
//   lineWrapping : true,  //auto line break?
//   extraKeys: {          //auto completion
//      "Ctrl-Space": 'autocomplete'
//    }
// }}
// autoFocus={true}
// onChange={(editor, data, value) => {
// }}
// />
//    </div>
//    )
// }

/*
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('codemirror');
const createReactClass = require('create-react-class');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

var defaults = {
   markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
   javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

var Code = createReactClass({
   getInitialState () {
      return {
         code: defaults.markdown,
         readOnly: false,
         mode: 'markdown',
      };
   },
   updateCode (newCode) {
      this.setState({
         code: newCode
      });
   },
   changeMode (e) {
      var mode = e.target.value;
      this.setState({
         mode: mode,
         code: defaults[mode]
      });
   },
   toggleReadOnly () {
      this.setState({
         readOnly: !this.state.readOnly
      }, () => this.refs.editor.focus());
   },
   render () {
      var options = {
         lineNumbers: true,
         readOnly: this.state.readOnly,
         mode: this.state.mode
      };
      return (
         <div>
            <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />
            <div style={{ marginTop: 10 }}>
               <select onChange={this.changeMode} value={this.state.mode}>
                  <option value="markdown">Markdown</option>
                  <option value="javascript">JavaScript</option>
               </select>
               <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
            </div>
         </div>
      );
   }
});
export default Code;
//ReactDOM.render(<App />, document.getElementById('root'));
*/