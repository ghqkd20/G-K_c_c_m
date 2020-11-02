import React, {Component} from 'react'

function test(name){
  return 'hello' +name;
}
const TableBody = () =>{
  return(
  <div style="width: 900px; margin-left: 500px;">
    <h4 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; margin-top: 30px;margin-bottom: 10px;">Code input</h4> 
  <textarea name="script" id="editor" style="float:right;">
  </textarea>
  </div>
  )
}


export default TableBody