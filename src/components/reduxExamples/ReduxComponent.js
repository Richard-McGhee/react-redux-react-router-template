import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { placeholderAction1, getUser } from '../../actions/tempActions1'
import { placeholderAction2 } from '../../actions/tempAction2'

const ReduxComponent = (props) => {

    useEffect(() => {
        props.getUser()
        props.placeholderAction1()
        props.placeholderAction2("Placeholder 2, pulled in from parameters")
    },[])

    return ( 
        <div>
            <Link to="/">Home</Link>
            
            {props.tempArr1.length > 0 ? <h1>{props.tempArr1[0].tempText}</h1> : <h1>Problems1</h1>}
            {props.tempArr2.length > 0 ? <h1>{props.tempArr2[0].tempText}</h1> : <h1>Problems2</h1>}

            {props.error && <h1>{props.error}</h1>}
            {props.tempArr1.length > 1 && <h1>User Name from API call: {props.tempArr1[1].first_name} - {props.tempArr1[1].last_name}</h1>}
            <h3>An Example of thunk usage.</h3>
        </div>
     );
}

const mapProps = (state) => {
    return {
        tempArr1: state.tempReducer1.tempArr,
        tempArr2: state.tempReducer2.tempArr,
        loading: state.tempReducer1.loading,
        error: state.tempReducer1.error
    }
}
export default connect(mapProps, { placeholderAction1, placeholderAction2, getUser })(ReduxComponent);