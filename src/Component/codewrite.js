


import {UnControlled as CodeMirror} from 'react-codemirror2'
import React from 'react';
import { Component } from 'react';
import Select from './select';
import store from '../store';
import '../index.css';
import MDEditor from './mdEditor';
import { RichUtils } from 'draft-js';

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
			testcase:[],
			completed: 0,
            mode:store.getState().code_mode,
            content:'<h1>I react-codemirror2</h1>\n\n def main():\n \n #include<stdio.h>\n\n int main(void){\n}\n\nfunction test(){} '
        ,result:[]}
            store.subscribe(function(){
            this.setState({theme:store.getState().theme,mode:store.getState().code_mode});
      }.bind(this))
   }

	componentDidMount() {
		// 프록시로 등록한 서버주소가 생략됨
		this.timer = setInterval(this.progress, 20);
		this.callApi()
		.then(res => this.setState({testcase: res}))
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/testcases'+'/'+store.getState().num);
		const body = await response.json();
		return body;
	}

	progress = () => {
		const { completed } = this.state;
		this.setState({ completed: completed >= 100 ? 0 : completed + 1});
	}

    onsubmittest = async(e) => {
		e.preventDefault()
        for(var i =0;i<this.state.testcase.length;i++){
			console.log(this.state.testcase[i].output)
			this.submit(this.state.testcase[i].input)
			
			if(this.state.testcase[i].output === this.state.result){
				alert("정답")
			}
			else{
				alert("오답")
			}
            for(var j = 0;j<1000000000;j++){
                
			}
			console.log(this.state.result)
        }
     }
  
    async submit(input){
        const response = await fetch('/run',{
            method: "POST",
            headers:{
               'Content-type' : 'application/json'
            },
            body : JSON.stringify({
               code : this.state.content,
               stdin : input,
               mode : this.state.mode,
               num : store.getState().num
            })
         });
         const body = await response.json();
         //alert(JSON.parse(body))
          this.setState({result:JSON.parse
              (body)['stdout']})
		 console.log(this.state.result)
		 alert(this.state.result)
         return body;   
    }

    render(){
     
    return (
            <form onSubmit={this.onsubmittest}>

        <div className ="Code">
        <CodeMirror
            value='<h1>I react-codemirror2</h1>\n
            \n def main():\n 
            \n #include<stdio.h>\n
            \n int main(void){\n}\n\nfunction test(){} '
            options={{lineNumbers: true,
            mode: this.state.mode,
          //      mode : "text/x-csrc",
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
            <p className="code">실행 결과</p>
            <p className="coderesult">{this.state.result}</p>
            </form>
        )
        }
    }
 
 export default Code;