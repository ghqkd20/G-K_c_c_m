import React from 'react';
import Axios, { post } from 'axios';
import store from '../store'


class ProblemAdd extends React.Component {
    

    constructor(props){
        super(props);
        this.state ={
            name: '',
            professor: '',
            try: '',
            content: '',
            add_mode : store.getState().add_mode
        }
        store.subscribe(function(){
            // var num = store.getState().num;
             this.setState({add_mode:store.getState().add_mode})
           }.bind(this))
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('plz');
        Axios({
            method:'post',
            url:'/problems',
            data: {
                name : this.state.name,
                professor : this.state.professor,
                try : this.state.try,
                content : this.state.content
            }
          })
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh()
                console.log("h")
                store.dispatch({type:'BACK',mode:'table',add_mode:'no'})
            })
            .catch((err) => {
                console.log(err);
            })
        
        this.setState({
            name: '',
            professor: '',
            try: '',
            content: '',
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(e.target);
        this.setState(nextState);
    }

    addProblem = () => {
        const url = '/problems';
        const formData = new FormData();
        formData.append('number', this.state.number);
        formData.append('name', this.state.name);
        formData.append('professor', this.state.professor);
        formData.append('try', this.state.try);
        console.log(formData);
        const config = {
            headers : {
                'content-type': 'application/json;charset=UTF-'
            }
        };
        return post(url, formData, config);
        // const result = Axios.post(url, formData);
        // for (var value of formData.values()){
        //     console.log(value);
        // }
        // console.log(result);
        // console.log(result.data);
        // return result;
    }

    render() {
        return (
            <div className = {this.state.add_mode}>
            <form onSubmit={this.handleFormSubmit}>
                <h1>문제 추가</h1>
                문제 이름: <input type ="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
                교수 이름: <input type ="text" name="professor" value={this.state.professor} onChange={this.handleValueChange}/><br/>
                시도 횟수: <input type ="text" name="try" value={this.state.try} onChange={this.handleValueChange}/><br/>
                문제 내용: <input type ="text" name="content" value={this.state.content} onChange={this.handleValueChange}/><br/>
                <button type = "submit">추가하기</button>

            </form>
            </div>
        )
    }
}

export default ProblemAdd;