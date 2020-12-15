import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Exercises from '../components/Exercises';
import Page from '../components/Page';
import Pages from '../components/Pages';
import Turma from '../components/Turma';
import Turmas from '../components/Turmas';
import Game from '../components/Games';
import Appbar from '../components/Appbar';
import Login from '../components/Login';

import { useSelector } from 'react-redux';

const PriveteRoute = ({component : Component, ...restProps}) => {
    const userToken = useSelector((state) => state.user.token);
    return(
        <Route {...restProps} render={props => (
            (userToken)? 
            (<Component {...props}/>):
            (<Redirect to={{ pathname: '/', state: {from: props.location}  }} />)
        )} />
    )
}
const PriveteRouteProfessor = ({component : Component, ...restProps}) => {
    const user = useSelector((state) => state.user);
    return (
        (user.conta == 'professor')?
        (<PriveteRoute {...restProps} component={Component} />):
        (<Redirect to={{ pathname: '/', state: {from: restProps.location}  }} />)
    );

}

const Routes = () => (
    <BrowserRouter>
        <Login />
        <Appbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <PriveteRoute exact path="/exercicios" component={Exercises}/>
            <PriveteRoute exact path="/page" component={Pages}/>
            <PriveteRoute exact path="/page/:id" component={Page}/>
            <PriveteRoute exact path="/game/:id" component={Game}/>
            <PriveteRouteProfessor exact path="/turma" component={Turmas}/>
            <PriveteRouteProfessor exact path="/turma/:turma" component={Turma}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;