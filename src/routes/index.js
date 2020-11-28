import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Exercises from '../components/Exercises';
import Page from '../components/Page';
import Pages from '../components/Pages';

import { useSelector } from 'react-redux';

const PriveteRoute = ({component : Component, ...restProps}) => {
    const userToken = useSelector((state) => state.user.token);
    return(
        <Route {...restProps} render={props => (
            (userToken || localStorage.getItem("token"))? 
            (<Component {...props}/>):
            (<Redirect to={{ pathname: '/', state: {from: props.location}  }} />)
        )} />
    )
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <PriveteRoute exact path="/exercicios" component={Exercises}/>
            <PriveteRoute exact path="/page/:id" component={Page}/>
            <PriveteRoute exact path="/pages" component={Pages}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;