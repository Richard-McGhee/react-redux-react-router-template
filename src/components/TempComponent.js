import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { placeholderAction1 } from '../actions/tempActions1'
import { placeholderAction2 } from '../actions/tempAction2'
import App from '../App'

const TempComponent = (props) => {

    useEffect(() => {
        props.placeholderAction1()
        props.placeholderAction2()
    },[])
    
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Route exact path="/" component={App} />

            {props.tempArr1.length > 0 ? <h1>{props.tempArr1[0].tempText}</h1> : <h1>Problems1</h1>}
            {props.tempArr2.length > 0 ? <h1>{props.tempArr2[0].tempText}</h1> : <h1>Problems2</h1>}
        </div>
     );
}

const mapProps = (state) => {
    return {
        tempArr1: state.tempReducer1.tempArr,
        tempArr2: state.tempReducer2.tempArr
    }
}
export default connect(mapProps, { placeholderAction1, placeholderAction2 })(TempComponent);