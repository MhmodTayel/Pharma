import React from "react";
import {Home,NewOrder} from './Pages/index'
import {BrowserRouter , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path={"/home"} exact component={Home} />
      <Route path={"/"} exact component={Home} />
    </Switch>
  </BrowserRouter>
    // <NewOrder/>
  );
}

export default App;
