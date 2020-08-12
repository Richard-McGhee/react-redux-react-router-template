import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact ="/">
          //homepage component goes here
        </Route>
      </Switch>
    </div>
  );
}

export default App;
