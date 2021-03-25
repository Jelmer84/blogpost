import React, { useState } from 'react';
import './App.css';
import HomePage from "./Components/HomePage";
import BlogOverall from "./Components/BlogOverall";
import BlogIndividual from "./Components/BlogIndividual";
import LoginPage from "./Components/LoginPage";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <Router>
        <nav>
            <ul>
                <li>Home Page</li>
                <li>Login</li>
                <li>Blog Overall</li>
                <li>Blogs</li>
            </ul>

            Navigatiemenu</nav>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/login">
            <LoginPage />
            </Route>
            <Route path="/blogposts">
            <BlogOverall />
            </Route>
            <Route exact path="/blog/:id">
            <BlogIndividual />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
