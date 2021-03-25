import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function HomePage() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <div>Home Page!</div>
    );
}

export default HomePage;