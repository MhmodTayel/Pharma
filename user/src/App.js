import React from "react";

import {Home,NewOrder ,Contact} from './Pages/index'
import {BrowserRouter , Switch , Route} from 'react-router-dom'


function App() {
  return (
   

    

  //   <BrowserRouter>
  //   <Switch>
  //     <Route path={"/home"} exact component={Home} />
  //     <Route path={"/"} exact component={Home} />
  //   </Switch>
  // </BrowserRouter>
    <NewOrder/>
//      <Contact/> 
  );
}

export default App;
