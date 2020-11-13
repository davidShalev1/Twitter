import react from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
    return(
        <div className="home-hero">
            <h1>what`s happening ?</h1>
            <h4>New to Twitter ?</h4>
            <Link to="/signup" className="btn btn-primary">sign up</Link>
        </div>
    )
}

export default HomePage;