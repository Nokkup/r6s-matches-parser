import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Main = React.lazy(() => import("../../pages/Main"));
const Json = React.lazy(() => import("../../pages/Json"));

const AppRouter = () => {
    return (
        <React.Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={"/"} exact={true} component={Main} />
                <Route path={"/json"} component={Json} />
                <Redirect to={"/"} />
            </Switch>
        </React.Suspense>
    );
};

export default AppRouter;
