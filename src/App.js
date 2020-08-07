import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
         <Route  path="/checkout">
            <h1>checkout</h1>
         </Route>

         <Route  path="/login">
            <h1>login page</h1>
         </Route>

         <Route  path="/">
            <h1>Home page</h1>
         </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
