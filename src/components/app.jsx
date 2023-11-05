import React, { useState } from "react";
import Custom from './custom.jsx';
import Header from './header.jsx';


function App(){
  const [counter,setCounter] = useState(100)
    function use(){
      setCounter(200)
    }
  return <div>
    <Header  />
    <Custom name= {`${"Starc Lee "+counter}`} />
    <button onClick={use}>Click here</button>
    
  </div>
}

export default  App;