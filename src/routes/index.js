
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import NeutralRoute from "./NeutralRoute";

const Home = lazy(() => import('../component/pages/_home/index'))

function AppRouter() {
    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <NeutralRoute path="/" exact component={Home} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
