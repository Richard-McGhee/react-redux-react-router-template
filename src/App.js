import React from 'react'
import TempComponent from './components/TempComponent'
import ContextComponent from './components/ContextComponent'
import DynamicRoutingExample from './components/DynamicRoutingExample'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/formExample">Form Example</Link>
      <Link to="/componentExample">Component Example</Link>
      <Link to="/dynamicRoutingExample">Dynamic Routing Example</Link>
      <Route path="/formExample" component={ContextComponent} />
      <Route path="/componentExample" component={TempComponent} />
      <Route path="/dynamicRoutingExample" component={DynamicRoutingExample} />
    </div>
  );
}

export default App;
