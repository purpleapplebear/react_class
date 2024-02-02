import React from 'react';

function item(){
    return <h2>123</h2>
}

let jobs = {
    "ninja": <h2>Ninja details</h2>,
    "artist": <h2>Artist details</h2>,
    "designer": (props) => {
        return <h3>Job type: {props.type}</h3>
    },
    "programmer": <h2>Programmer details</h2>,
}

let getJob = (key, props) => {
    return typeof jobs[key] == 'function' ? jobs[key](props) : jobs[key];
}

export default function person(props){
    return (

    <div>
        <h1>Person:</h1>
        {props.test ? item() : ''}
        {/* {jobs[props.test] ? jobs[props.test] : ""} */}
        {getJob(props.test, props)}
        <table>
            <tr>
                <td>Name: </td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Age: </td>
                <td>{props.age}</td>
            </tr>
            <tr>
                <td>Gender: </td>
                <td>{props.gender}</td>
            </tr>
            <tr>
                <td>Telephone: </td>
                <td>{props.telephone}</td>
            </tr>
        </table>
    </div>


);}