import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createMathjaxPlugin from 'draft-js-mathjax-plugin'
import store from '../store'
const mathjaxPlugin = createMathjaxPlugin(/* optional configuration object */)
 
const plugins = [
  mathjaxPlugin,
]
 
export default class MyEditor extends Component {
 
  state = {
    math_mode :store.getState().math_mode,
    editorState: EditorState.createEmpty(),
  }
  constructor(props){
      super(props);
      store.subscribe(function(){
        // var num = store.getState().num;
         this.setState({math_mode:store.getState().math_mode})
       }.bind(this))
  }
 
  onChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  render() {
    return (
    <div className = {this.state.math_mode}>
        <h3 className ="code">수식 입력</h3>
      <Editor 
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
      </div>
    )
  }
}