import {createStore} from 'redux';

export default createStore(function(state,action){
    if(state === undefined){
        return {
        mode : 'TABLE',
        num : 0,
        main_title : 'Problem list',
        title_css : 'code',
        theme : "dracula",
        contentlist : ['this','t1','tt2','tt3'],
        content : 'test'
        }
    }
    if(action.type === 'CODE'){
        return {...state,mode:'CODE',num:action.num,content:state.contentlist[action.num],main_title:action.main_title}
    }
    if(action.type === 'SELECT'){
        return {...state,theme:action.theme}
    }
    if(action.type ==='BACK'){
        return {...state,mode : "TABLE",main_title:'Problem list',theme:'dracula'}    
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())