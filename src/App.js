import React, {Fragment} from 'react';
import './App.css';
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
  return (
    <Fragment>
      <Home/>
      <Room/>
      <SingleRoom/>
      <Error/>
    </Fragment>
  );
}

export default App;
