    import {createStore} from 'redux';

    export default createStore(function(state,action){

    if(state === undefined){
        return {
            mode : 'TABLE',
            num : 0,
            main_title : 'Problem list',
            title_css : 'code',
            theme : "blackboard",
            back:'btn',
            contentlist : ['this','t1','tt2','tt3'],
            content : 'test',
            code_mode : 'javascript',
            ment_title :' ',
            ment_content : ' ',
            math_mode : 'no',
        }
    }
    if(action.type === 'CODE'){
        return {...state,mode:'CODE',num:action.num,
        content:action.content,main_title:action.main_title,back:action.back}
    }
    if(action.type ==='math'){
        return {...state,math_mode:action.math_mode}
    }
    if(action.type ==='MENT'){
        return{...state,mode:'MENTOR_R',ment_title:action.main_title,ment_content:action.content}
    }

    if(action.type === 'SELECT'){
        return {...state,theme:action.theme,code_mode:action.mode}
    }

    if(action.type ==='BACK'){
        return {...state,mode :'TABLE',main_title:'Problem list',theme:'dracula'}
    }
    if(action.type ==='MENTOR'){
        return {...state,mode: "MENTOR",main_title:'Question',num:action.num}
    }
    if(action.type ==='BACK2'){
        return {...state,mode:"CODE"}
    }
    if(action.type ==='SUBMIT'){
        return{...state,mode:"CODE",submit:'yes'}
    }
    return state;
    }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
