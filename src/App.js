import React from 'react'
import TempComponent from './components/TempComponent'
import ContextComponent from './components/ContextComponent'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/formExample">Form Example</Link>
      <Link to="/componentExample">Component Example</Link>
      <Route path="/formExample" component={ContextComponent} />
      <Route path="/componentExample" component={TempComponent} />
    </div>
  );
}

export default App;
