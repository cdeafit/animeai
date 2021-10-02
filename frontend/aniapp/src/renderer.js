import React from "react";
import reactDOM from "react-dom";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox(){
        this.setState({isLoginOpen: true,
                    isRegisterOpen:false})
    }

    showLoginBox(){
        this.setState({isLoginOpen: false,
                    isRegisterOpen:true})
    }

    render(){
        return (
        <div className="root-container">
            <div className="box-controller">
                <div className="controller">
                    Log in
                </div>
            </div>

        </div>
        )
    }

}

reactDOM.render(<App />, document.getElementById("root"));