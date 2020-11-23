import React from "react";
import {connect} from "react-redux";
import {withRouter,Redirect,Switch,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
import AuthForm from "../components/AuthForm";
import {authUser, removeError} from "../store/actions/auth";

const Main = props =>{
    const {authUser,errors,removeError,currentUser} = props;
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={(props)=>
                    <HomePage currentUser={currentUser} {...props}   /> 
                    } 
                />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm
                            removeError={removeError} 
                            errors={errors}
                            onAuth={authUser}
                            {...props} 
                            heading="Welcome back!!!"
                            buttonText="Sign in"
                        />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm 
                            signup
                            removeError= {removeError}
                            errors= {errors}
                            onAuth={authUser}
                            {...props}
                            heading="welcome!!!"
                            buttonText="Sign up"  
                        />
                    )
                }} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser:state.currentUser,
        errors:state.errors
    }
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));

