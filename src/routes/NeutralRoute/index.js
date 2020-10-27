import React from "react";
import { Route } from "react-router-dom";
import { NeutralLayout } from "../../component/layouts/index";

export const NeutralRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => <NeutralLayout Component={Component} {...props} />}
        />
    );
};

export default NeutralRoute;
