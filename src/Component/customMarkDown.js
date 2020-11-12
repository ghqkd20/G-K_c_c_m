'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AtomicBlockUtils,EditorState, Modifier } from 'draft-js';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
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

export {MathFormatEdit};