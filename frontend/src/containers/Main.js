import React from "react";
import {connect} from "react-redux";
import {withRouter,Redirect,Switch,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import AuthForm from "../components/AuthForm";

const Main = props =>{
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} /> } />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm 
                           {...props} heading="Welcome back!!!" buttonText="Sign in"/>
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm 
                            signup {...props} heading="welcome!!!" buttonText="Sign up"/>
                    )
                }} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser:state.currentUser
    }
}

export default withRouter(connect(mapStateToProps,null)(Main));

