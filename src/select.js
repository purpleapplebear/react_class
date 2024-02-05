import React from 'react';
import { useState } from 'react';

let html = ''
let i = 0

function options(data) {
    console.log(data)
    for (i in data){
        let list = (data[i].split(","))
        let j = 0
        while (j < list.length) {
            console.log(list[j])
            html = html += `<option>${list[j]}</option>`
            j++
        }
    }
    return html
}


export default function (values){

    return (
    <select name="dropdown">
        <option value=""> --------- </option>
        {options(values)}
    </select>
    )
   

}

    