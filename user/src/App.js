import React from "react";
import {Home ,Contact} from './Pages/index'
import {BrowserRouter , Switch , Route} from 'react-router-dom'


function App() {
  return (
   
  //   <BrowserRouter>
   
  //   <Switch>
  //     <Route path={"/home"} exact component={Home} />
  //     <Route path={"/"} exact component={Home} />
      
  //     {/* <Route path={"/Contact"} exact component={Contact} /> */}
  //   </Switch>
  
  // </BrowserRouter>
     <Contact/> 
    
  );
}

export default App;
