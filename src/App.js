import React, { Component } from 'react';
import Form from './form'
import './App.css';

// const logMyName=()=>{
// console.log('my name is marwa')
// }
// const clickme=(event)=>{
//   console.log(event.target.value)
// }

class App extends Component {


  render() {
    return (
      <div className="App">
        <Form/>
    {/* <h1>Hello world</h1>
    <input type='button' value='click me' onClick={logMyName}/>
    <input type='text' onChange={clickme}/> */}

{/**** <input type='text' onchange={(event)=>console.log(event.target.value)}}/> * **/}

    </div>
    );
  }
}

export default App;