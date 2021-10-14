import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Json from "../../pages/Json";
import Main from "../../pages/Main";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={"/"} exact={true} component={Main} />
            <Route path={"/json"} component={Json} />
            <Redirect to={"/"} />
        </Switch>
    );
};

export default AppRouter;
