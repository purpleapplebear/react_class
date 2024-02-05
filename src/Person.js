import React from 'react';
import { useState } from 'react';

// function item(){
//     return <h2>123</h2>
// }

let jobs = {
    "ninja": <h2 style={{backgroundColor: "pink"}}>Ninja details</h2>,
    "artist": (props) => {
        return <h2 style={{backgroundColor: (props.color)}}>Artist details</h2>
    },
    "designer": (props) => {
        return <h3>Job type: {props.type}</h3>
    },
    "programmer": <h2>Programmer details</h2>,
}

let getJob = (key, props) => {
    return typeof jobs[key] == 'function' ? jobs[key](props) : jobs[key];
}


function list(data) {
    if (data) {
        return data.split(",").map((item)=>{
            return item > 'b' ? <li>{item}</li> : <li>**{item}**</li>
        })
    }
  
  }




export default function (props){

    let [counter, setCounter] = useState(10000)
    let [title, setTitle] = useState("ABCXYZ123")

    let test = {
        age:123,
        gender: 'mf',
        telephone: '012345'
    }

    let [inputs, setInputs] = useState(test)


    function doInput(event) {
        //event.preventDefault()   ----> prevents button click from submitting form
        if(event.target.name){
            let newData = {...inputs}
            newData[event.target.name] = event.target.value
            setInputs(newData)
        }
        //e=>setInputs({...inputs, gender:e.target.value})
    
      }


    return (

    <div>
        <h1>Person ({counter}) {title}</h1>
        <button onClick={e=>setCounter(counter += 3)}>Click me!</button>
        <h3>{inputs.age}</h3>
        <h3>{inputs.gender}</h3>
        <h3>{inputs.telephone}</h3>
        {/* {props.test ? item() : ''} */}
        {/* {jobs[props.test] ? jobs[props.test] : ""} */}
        {getJob(props.test, props)}
        <table onInput={e=>doInput(e)}>
            <tr>
                <td>Name: </td>
                <td><input value={title} onInput={e=>{setTitle(e.target.value)}} /></td>
            </tr>
            <tr>
                <td>Age: </td>
                <td><input name="age" value={props.age} /></td>
            </tr>
            <tr>
                <td>Gender: </td>
                <td><input name="gender" value={props.gender}  /></td>
            </tr>
            <tr>
                <td>Telephone: </td>
                <td><input name="telephone" value={props.telephone} /></td>
            </tr>
        </table>
        {list(props.list)}
    
    </div>


);}