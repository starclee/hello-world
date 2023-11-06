import React, { useEffect, useState } from "react";
import Custom from "./custom.jsx";
import Header from "./header.jsx";

function App() {
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function use() {
    setCounter((oldOne) => oldOne + 1);
  }

  return (
    <div>
      <Header />
      <Custom name={`${"Starc Lee " + counter}`} />
      <button onClick={use}>Click here</button>
    </div>
  );
}

export default App;
