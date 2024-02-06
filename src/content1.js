import React from 'react';

export default function(){

    let urlParams = new URLSearchParams(window.location.search)
    let code = urlParams.get("code")

    let hidden = code === '1234' ? 'You have entered the secrect password' : ''

    let link = "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl="+urlParams.get("name")

    return (
        <>
        <h1>Hello {urlParams.get("name")}</h1>
        <p>{hidden}</p>
        <img src={link} />
        </>
    )

}