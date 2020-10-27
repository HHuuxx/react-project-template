import React from "react";
import { Route } from "react-router-dom";
import { PrivateLayout } from "../../component/layouts/index";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <PrivateLayout Component={Component} {...props} />}
    />
  );
};

export default PrivateRoute;
