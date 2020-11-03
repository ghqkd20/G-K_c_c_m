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
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/keymap/sublime';
require('codemirror/mode/clike/clike');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');



<CodeMirror
  value={'<h1>I react-codemirror2</h1>'}
  options={{
    mode: 'clike',
    theme: 'dracula',
    lineNumbers: true
  }}
  
/>

export default CodeMirror;
