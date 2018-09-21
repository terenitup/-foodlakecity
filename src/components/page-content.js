import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Contact from "./contact";
import Blog from "./blog";
import Instagram from "./instagram";

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/instagram" component={Instagram} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}