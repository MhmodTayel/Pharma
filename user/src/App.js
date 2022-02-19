import React from "react";
import { Home, Login, NewOrder, Register } from './Pages/index'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path={"/"} exact component={Login} /> 
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/Register"} exact component={Register} />
        <Route path={"/home"} exact component={Home} />
        {/* <Route path={"/"} exact component={Home} />  */}
      </Switch>
    </BrowserRouter>
    // <NewOrder/>

  );
}

export default App;
