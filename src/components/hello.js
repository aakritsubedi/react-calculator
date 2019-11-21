import React from 'react';

const Hello = (props)=>{
    let elements = (
        <div>
            <h1>Hello {props.fname} {props.lName}</h1>
            <h4>welcome to basic react tutorials</h4>
        </div>
    
        );
        return elements;
}

export default Hello;