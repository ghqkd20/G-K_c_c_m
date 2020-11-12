import React, {Component} from 'react';
import {EditorState , convertToRaw} from "draft-js";
import draftToHtml from "draftjs-to-html";
import {Editor} from "react-draft-wysiwyg";
import Axios, { post } from 'axios';
import PropTypes from 'prop-types';
import store from '../store';
import MyEditor from './mathjax'

//import './myMarkDown.css'
import MathFormatEdit from './customMarkDown'


function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.sejkjktRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}


class EditorContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      number:store.getState().num,
      name:'',
      content:''
    };
  }



  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
      content : draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
    console.log(this.state.content);
  };

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('plz');
    Axios({
        method:'post',
        url:'/mentorings',
        data: {
            number : this.state.number,
            name : this.state.name,
            content : this.state.content,
        }
      })
    //this.addProblem()
        .then((response) => {
            console.log(response.data);
            store.dispatch({type:'BACK2',mode:'CODE',num:this.state.number,math_mode:'no'})
        })
        .catch((err) => {
            console.log(err);
        })
    
    this.setState({
        editorState: EditorState.createEmpty(),
        number: store.getState().num,
        name: '',
        content: '',
    })
}

handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(e.target.value)
    this.setState(nextState);
}

  render(){
    const { editorState } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
      <div className='editor' >
      
      <input type="text" name = 'name' className="ment" label = "글 제목 " placeholder="제목을 입력해 주세요" 
      value={this.state.name} onChange={this.handleValueChange}/>
      
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
       toolbarCustomButtons={[<MathFormatEdit/>]}    
        toolbar={{
          inline: { inDropdown: false },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />

    </div>
    <button type = "submit" className="back">제출하기</button>
    </form>
    )
  }
}

export default EditorContainer;