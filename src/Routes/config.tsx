import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

//This is where you will declare all of your routes (the ones that show up in the search bar)
export const routes = {
    root: `/`,
    home: `/home`,
    user: `/user`,
    classes: `/classes`,
    classesCreate: `/classes/create`,
};

//This is where you will tell React Router what to render when the path matches the route specified.
export const Routes = () => {
    return (
        <>
            {/* The page wrapper is what shows the NavBar at the top, it is around all pages inside of here. */}
            <BrowserRouter>
                <Switch>
                    {/* When path === / render LandingPage */}
                    <Route path={routes.home} exact>
                        <HomePage/>
                    </Route>
                    {/* Going to route "localhost:5001/" will go to homepage */}
                    <Route path={routes.root} exact>
                        <Redirect to={routes.home}/>
                    </Route>
                    {/* This should always come last.
            If the path has no match, show page not found */}
                    <Route path="*" exact>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};
