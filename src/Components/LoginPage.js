import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function LoginPage() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
       <button type="login ">Log hier in!</button>
    );
}

export default LoginPage;
