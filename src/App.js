import { Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./Pages/CountryDetails";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries/:country" component={CountryDetails} />
    </>
  );
}

export default App;
