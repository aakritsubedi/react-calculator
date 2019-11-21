import React from 'react';

const Hello = (props)=>{
    let elements = (
        <div>
            <h1>Hello {props.userInfo.fName} {props.userInfo.lName}</h1>
            <h4>welcome to basic react tutorials</h4>
            <h4>active since: {new Date().toLocaleTimeString()}</h4>
            <hr/>
        </div>
    
        );
        return elements;
}

export default Hello;