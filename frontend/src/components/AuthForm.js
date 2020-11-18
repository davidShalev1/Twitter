import React,{Component} from "react";

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            username:"",
            password:"",
            profileImgUrl:""
        }
    }

handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
}
handleSubmit = e =>{
    e.preventDefault();
    const authType = this.props.signup ? "signup" : "signin";
    //console.log(this.state);
    this.props.onAuth(authType,this.state).then(() =>{
        console.log("logged in");
    });
}

    render(){
        const {email,username,password,profileImgUrl} = this.state;
        const {buttonText,heading,signup} = this.props;
        return(
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                      <h2>{heading}</h2>
                      <label htmlFor="email">Email:</label>
                      <input className="form-control" 
                        id="email" 
                        type="text"
                        onChange={this.handleChange}
                        value={email}
                        name="email"
                        />
                        <label htmlFor="password">password:</label>
                      <input className="form-control" 
                        id="password" 
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        />
                        {signup && (
                            <div>
                             <label htmlFor="username">Username:</label>
                            <input className="form-control" 
                                id="username" 
                                type="text"
                                onChange={this.handleChange}
                                value={username}
                                name="username"
                                />
                                <label htmlFor="profileImgUrl">profileImgUrl:</label>
                            <input className="form-control" 
                                id="profileImgUrl" 
                                type="text"
                                onChange={this.handleChange}
                                name="profileImgUrl"
                                />
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block btn-lg"
                        >
                            {buttonText}
                        </button>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;