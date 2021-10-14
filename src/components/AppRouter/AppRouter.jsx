import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../../pages/Main";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={"/"} exact={true} component={Main} />
            <Redirect to={"/"} />
        </Switch>
    );
};

export default AppRouter;
