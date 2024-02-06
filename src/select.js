import React from 'react';
import { useState } from 'react';
import parse from 'html-react-parser'

let html = ''
let i = 0
let j = 0

export default function options(data){


    // return data.split(",").map((item)=>{
    //         return <option>{item}</option>
        // })
    for (i in data){
        let list = (data[i].split(","))
        while (j < list.length) {
            html = html += `<option>${list[j]}</option>`
            j++
        }
    }

    return (
        <select name="dropdown">
            <option value=""> --------- </option>
            {parse(html)}
        </select>
        )

}
    