/*
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

<CodeMirror
  value={code}
  options={{
    theme: 'monokai',
    tabSize : 10,
    keyMap: 'sublime',
    theme : 'monokai',
    mode : 'cmake'
  }}
/>
*/
//https://uiwjs.github.io/react-codemirror/

import {UnControlled as CodeMirror} from 'react-codemirror2'
import { Component } from 'react';
require('codemirror/mode/clike/clike');
require('codemirror/mode/cmake/cmake');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');


function code(options){
	return (
	<CodeMirror
  		value={'<h1>I react-codemirror2</h1>'}
  		options={{lineNumbers: true,
			mode: 'javascript',
			theme : 'dracula'
		}}
  		autoFocus={true}
		onChange={(editor, data, value) => {
		}}
	/>
	)
}

export default code;

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