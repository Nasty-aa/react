import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function PublicRout({authenticated, ...rest}) {
    return !authenticated ? <Route {...rest} /> : <Redirect to="/chats"/>;
}