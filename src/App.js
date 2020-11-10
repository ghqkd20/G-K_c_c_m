
import './App.css';
import React,{Component } from 'react';
import Title from './Component/title';
import Table from './Component/table';
import Code from './Component/codewrite'
import Back from './Component/back';
import Probsub from './Component/probsub';
import Select from './Component/select';
import Mbtn from './Component/mbtn';
import MDEditor from './Component/mdEditor';
import Back2 from './Component/back2';
import Submit from './Component/submit';
import Mentolist from './Component/mentolist';
import store from './store';
import './index.css';

class App extends Component { 
  state = {mode : store.getState().mode}
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({mode:store.getState().mode})
    }.bind(this))
  }  

//tablemode 라는 component 에 title과 table 컴포넌트가 들어가는데 
// 이 title 과 table 은 랜더링이 되어야 함
//근데 랜더링 되는 정보는 title 은 title 이름 뿐이고 table 은 mode인데 이건 클릭 되면 알리기 위함이다.
// 즉 클릭 했을때 table를 가지고 있는 tablemode 에서 onclick 을 받아서 app 에서 route 시켜야 함

// redux 라는 개념을 쓸수 있으면 좋지 않을까 생각된다.


//codemode 라는 component 에 title ,probsub(content), select()
  render(){
    var two_mode = null;
      if(this.state.mode === 'TABLE'){
          two_mode = <div>
          <Title></Title>
          <Table></Table>  
          </div>
      }
      else if(this.state.mode ==='CODE'){
        two_mode =<div>
        <Back></Back>
        <Title></Title>
        <Probsub></Probsub>
        <Mbtn></Mbtn>
        <Select></Select>
        <Code></Code>
        <Mentolist/>
        </div>
      }
      else if(this.state.mode ==='MENTOR'){
        two_mode = <div>
          <Back2></Back2>
          <Title></Title>
          <MDEditor></MDEditor>
          <Submit></Submit>

        </div>
      }
      return (
        <div>
          {two_mode}
          </div> 
      )
      }
  }



export default App;
