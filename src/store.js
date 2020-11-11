    import {createStore} from 'redux';

    export default createStore(function(state,action){

    if(state === undefined){
        return {
            mode : 'TABLE',
            num : 0,
            main_title : 'Problem list',
            title_css : 'code',
            theme : "dracula",
            back:'btn',
            contentlist : ['this','t1','tt2','tt3'],
            content : 'test',
            submit : 'no'
        }
    }
    if(action.type === 'CODE'){
        return {...state,mode:'CODE',num:action.num,
        content:action.content,main_title:action.main_title,back:action.back}
    }

    if(action.type === 'SELECT'){
        return {...state,theme:action.theme}
    }

    if(action.type ==='BACK'){
        return {...state,mode :'TABLE',main_title:'Problem list',theme:'dracula'}
    }
    if(action.type ==='MENTOR'){
        return {...state,mode: "MENTOR",main_title:'Question',num:action.num}
    }
    if(action.type ==='BACK2'){
        return {...state,mode:"CODE",main_title:'Problem list',num:action.num}
    }
    if(action.type ==='SUBMIT'){
        return{...state,mode:"CODE",submit:'yes'}
    }
    return state;
    }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
