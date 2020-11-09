'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AtomicBlockUtils,EditorState, Modifier } from 'draft-js';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

let count = 0;

const examples = [
  '\\int_a^bu\\frac{d^2v}{dx^2}\\,dx\n' +
  '=\\left.u\\frac{dv}{dx}\\right|_a^b\n' +
  '-\\int_a^b\\frac{du}{dx}\\frac{dv}{dx}\\,dx',

  'P(E) = {n \\choose k} p^k (1-p)^{ n-k} ',

  '\\tilde f(\\omega)=\\frac{1}{2\\pi}\n' +
  '\\int_{-\\infty}^\\infty f(x)e^{-i\\omega x}\\,dx',

  '\\frac{1}{(\\sqrt{\\phi \\sqrt{5}}-\\phi) e^{\\frac25 \\pi}} =\n' +
  '1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}}\n' +
  '{1+\\frac{e^{-8\\pi}} {1+\\ldots} } } }',
];




class MathFormatEdit extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,

  };


  addMathForm = () => {
    var inlineMath = ReactKaTeX.InlineMath;
    const { editorState, onChange } = this.props;
    
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      <InlineMath math="\\int_0^\\infty x^2 dx"/>,
      editorState.getCurrentInlineStyle(),
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
   
    };
/*
    insertTeXBlock = ()=> {
        const { editorState, onChange } = this.props;
        const contentState = editorState.getCurrentContent();
        const nextFormula = count++ % examples.length;
        const contentStateWithEntity = contentState.createEntity(
          'TOKEN',
          'IMMUTABLE',
          {content: examples[nextFormula]},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        alert(entityKey);
        const newEditorState = EditorState.set(
          editorState,
          {currentContent: contentStateWithEntity},
        );
        
        onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, 'P(E) = {n \\choose k} p^k (1-p)^{ n-k} '));
      }
*/
  render() {
    return (
      <div onClick={this.addMathForm}>🧮</div>
    );
  }
}

export {MathFormatEdit};