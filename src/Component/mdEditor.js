import React, {Component} from 'react';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
//import './myMarkDown.css'
//import {MathFormatEdit} from './customMarkDown'


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
    };
  }



  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render(){
    const { editorState } = this.state;
    return (
    <div className='editor' >
      <input type="text" id = 'ment' className="ment" label = "글 제목 " placeholder="제목을 입력해 주세요"/>
      
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
       // toolbarCustomButtons={[<MathFormatEdit />]}    
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
    )
  }
}

export default EditorContainer;