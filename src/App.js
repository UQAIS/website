import React from "react";
import Navbar from "./components/Navbar";
import Infobar from "./components/Infobar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About_Us from "./components/pages/About_Us";
import Events from "./components/pages/Events";
import Our_Mission from "./components/pages/Mission";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Terms from "./components/pages/Terms";
import Membership from "./components/pages/Membership";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Infobar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about_us" component={About_Us} />
          <Route path="/about/our_mission" component={Our_Mission} />
          <Route path="/about/our_team" component={Team} />
          <Route path="/about/contact_us" component={Contact} />
          <Route path="/about/terms" component={Terms} />
          <Route path="/events" component={Events} />
          <Route path="/membership" component={Membership} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
