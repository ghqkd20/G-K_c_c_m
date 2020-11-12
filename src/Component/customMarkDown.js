'use strict';

import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import store from '../store';



class MathFormatEdit extends Component {
    
  render() {
    return (
      <div onClick={function(){
        var state = store.getState().math_mode
        if(state ==='yes'){
        store.dispatch({type:'math',math_mode:'no'})
        }
        else{
          store.dispatch({type:'math',math_mode:'yes'})
        }
			}.bind(this)}>🧮</div>
    );
  }
}

export default MathFormatEdit;