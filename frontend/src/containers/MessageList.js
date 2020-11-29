import React,{Component} from "react";
import {connect} from "react-redux";
import {fetchMessages,removeMessage} from "../store/actions/Messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }

    render(){
        const {messages,removeMessage,currentUser} =this.props;
        let messagesList = messages.map(m => (
            <MessageItem
                key={m._id}
                date={m.createAt}
                text = {m.text}
                username = {m.user.username}
                profileImgUrl ={m.user.profileImgUrl}
                removeMessage ={removeMessage.bind(this,m.user._id,m._id)}
                isCorrectUser ={currentUser === m.user._id}
            />
        ))
        return (
            <div className="row col-sm-8">
                <div className="offeset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {messagesList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapDispatchToprops(state){
    return{
        messages:state.messages,
        currentUser:state.currentUser.user.id
    }
}

export default connect(mapDispatchToprops,{fetchMessages,removeMessage})(MessageList);