


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
    
  
    constructor(props){
      super(props);
      this.state={theme:store.getState().theme,
            mode:store.getState().code_mode,
            content:'<h1>I react-codemirror2</h1>\n\n def main():\n \n #include<stdio.h>\n\n int main(void){\n}\n\nfunction test(){} '
        ,result:[]}
            store.subscribe(function(){
            this.setState({theme:store.getState().theme,mode:store.getState().code_mode});
      }.bind(this))
   }

   componentDidMount() {
    this.onsubmittest()
    .then(res => {
       //const mydata = JSON.parse(data);
       console.log(res);
       //this.setState({result:mydata})
    })
    .catch(err => console.log(err));
    }
    
    onsubmittest = async(e) => {
        e.preventDefault()
        const response = await fetch('/run',{
           method: "POST",
           headers:{
              'Content-type' : 'application/json'
           },
           body : JSON.stringify({
              code : this.state.content,
              stdin : "0"
           })
        });
        const body = await response.json();
        //alert(JSON.parse(body))
        this.setState({result:JSON.parse
            (body)['stdout']})
        //console.log(this.state.result)
        //debugger;
        //console.log(this.state.result.stdout)
        return body;   
     }
  

    render(){
     
    return (
        
            <form onSubmit={this.onsubmittest}>

        <div className ="Code">
        <CodeMirror
            
            value='<h1>I react-codemirror2</h1>\n\n def main():\n \n #include<stdio.h>\n\n int main(void){\n}\n\nfunction test(){} '
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
            onEditorStateChange = {this.onEditorStateChange}
            onChange={(editor, data, value) => {
                this.setState({content:value})
                //debugger;
            }}
            />
            </div>
            <button type = "submit" className="compile" >Compile</button>
            <p>{this.state.result}</p>
            </form>
        )
        }
    }
 
 export default Code;