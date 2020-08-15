import React from 'react'
import ContextChild from './ContextChild'
import TempForm from './TempForm'
import { Route, Link } from 'react-router-dom'
import App from '../App'

const ContextComponent = (props) => {
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Route exact path="/" component={App} />
            <TempForm />
            <ContextChild />
        </div>
     );
}
 
export default ContextComponent;