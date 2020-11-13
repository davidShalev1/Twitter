import react from "react";
import {connect} from "react-redux";
import {withRouter,Redirect,Switch,Route} from "react-router-dom";
import HomePage from "../components/HomePage";
const Main = props =>{
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} /> } />
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

