import React from "react";
import { Route } from "react-router-dom";
import { PublicLayout } from "../../component/layouts/index";

export const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => <PublicLayout Component={Component} {...props} />}
        />
    );
};

export default PublicRoute;
