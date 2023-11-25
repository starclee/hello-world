import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Custom from "./custom.jsx";
import Header from "./header.jsx";
import User from "./user.jsx";

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
      <BrowserRouter>
        <Link to="/Counter/One">One</Link>
        {"   "}
        <Link to="/Counter/Two">Two</Link>
        {"   "}
        <Link to="/Counter/Three">Three</Link>
        {"   "}
        <Link to="/Counter/Four">Four</Link>
        {"   "}
        <Link to="/none">None</Link>

        <Routes>
          <Route
            path="/Counter/:userName"
            exact={true}
            element={
              <div>
                <User />
                <Header />
                <Custom name={`${"Starc Lee " + counter}`} />
                <button onClick={use}>Click here</button>
              </div>
            }
          />
          <Route path="/none" exact={true} element={<h2>Hii, Hello</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
