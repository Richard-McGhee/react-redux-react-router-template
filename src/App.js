import React, { useState } from 'react'
import ReduxComponent from './components/reduxExamples/ReduxComponent'
import ContextComponent from './components/contextAPIExamples/ContextComponent'
import DynamicRoutingExample from './components/dynamicRoutingExamples/DynamicRoutingExample'
import DynamicRoutingPost from './components/dynamicRoutingExamples/DynamicRotuingPost'
import HomePage from './components/HomePage'
import { Route, Link, Switch } from 'react-router-dom'
import uuid from 'uuid'
import './App.css'

function App() {
  const [DRState, setDRState] = useState({
    tempArr: [
        {
            name: "First Example",
            description: "First Example Description",
            number: 1,
            id: uuid()
        },
        {
            name: "Second Example",
            description: "Second Example Description",
            number: 2,
            id: uuid()
        }
    ]
})
  return (
    <div>
      <nav>
        <Link to="/componentExample" className="nav-links">Redux Component Example</Link>
        <Link to="/formExample" className="nav-links">Context Form Example</Link>
        <Link to="/dynamicRoutingExample" className="nav-links">Dynamic Routing Example</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/formExample" component={ContextComponent} />
        <Route path="/componentExample" component={ReduxComponent} />
        <Route exact path="/dynamicRoutingExample"><DynamicRoutingExample DRState={DRState} setDRState={setDRState}/></Route>
        <Route path="/dynamicRoutingExample/routedTo/:id">
          <DynamicRoutingPost items={DRState.tempArr}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
