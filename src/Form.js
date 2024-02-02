import React from 'react'

function name(name){
    return <label>First Name: <br /><input name={name} type="text" value={name}></input></label>
}

function surname(surname){
    return <label>Last Name: <br /><input name={surname} type="text" value={surname}></input></label>
}

function hair(hair){
    return <label>Hair Color: <br /><input name={hair} type="text" value={hair}></input></label>
}

function eyes(eyes){
    return <label>Eye Color: <br /><input name={eyes} type="text" value={eyes}></input></label>
}


export default (props) => (

    <div id="form">
        {props.name ? name(props.name) : ''}
        <br /><br />
        {props.surname ? surname(props.surname) : ''}
        <br /><br />
        {props.hair ? hair(props.hair) : ''}
        <br /><br />
        {props.eyes ? eyes(props.eyes) : ''}
    </div>


/* <div id="form">
    <label>First Name: <br /><input name="name" type="text" value={props.name}></input></label><br /><br />
    <label>Last Name: <br /><input name="surname" type="text" value={props.surname}></input></label><br /><br />
    <label>Hair Colour: <br /><input name="hair" type="text" value={props.hair}></input></label><br /><br />
    <label>Eye Colour: <br /><input name="eyes" type="text" value={props.eyes}></input></label><br /><br />
    <p id="save">Save Changes</p>
</div>  */


);