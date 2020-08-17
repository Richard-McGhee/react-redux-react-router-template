import React from 'react'

const DynamicRoutingPostSnippet = (props) => {
    return ( 
        <div>
            <h1>{props.item.name}</h1>
            <p>Arbitrary number --{">"} {props.item.number}</p>
        </div>
    );
}
 
export default DynamicRoutingPostSnippet;