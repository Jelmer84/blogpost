import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function BlogIndividual() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <div>Blog Individual!</div>
    );
}

export default BlogIndividual;