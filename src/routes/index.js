import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import VideoCarousel from '../components/VideoCarousel';
import Exercises from '../components/Exercises';
import Ranking from '../components/Ranking';

import { useSelector } from 'react-redux';

const PriveteRoute = ({component : Component, ...restProps}) => {
    const userToken = useSelector((state) => state.user.token);
    console.log('user logado:'+(userToken))
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
        </Switch>
    </BrowserRouter>
)

export default Routes;