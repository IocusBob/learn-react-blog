import react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Home";
import BlogList from "./BlogList";
import BlogShow from './BlogShow';
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blogs">
              <BlogList /> 
            </Route>
            <Route exact path="/blogs/:id">
              <BlogShow /> 
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
