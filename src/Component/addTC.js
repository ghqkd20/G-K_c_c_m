import React from 'react';
    import Axios, { post } from 'axios';
    import store from '../store';
class addTC extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            //number: store.getState().num,
            input: '',
            output: '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('plz');
        Axios({
            method:'post',
            url:'/testcases',
            data: {
                number : this.state.number,
                input : this.state.input,
                output : this.state.output
            }
          })
        //this.addProblem()
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        
        this.setState({
            number: store.getState().num,
            input: '',
            output: '',
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
            <form onSubmit={this.handleFormSubmit}>
                <h1>문제 추가</h1>
                input: <input type ="text" name="input" value={this.state.input} onChange={this.handleValueChange}/><br/>
                output: <input type ="text" name="output" value={this.state.output} onChange={this.handleValueChange}/><br/>
                <button type = "submit">추가하기</button>

            </form>
        )
    }
}

export default addTC;