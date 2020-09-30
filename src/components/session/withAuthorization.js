import React from "react";
import {withFirebase} from "../firebase";
import {withRouter} from 'react-router-dom'
import AuthUserContext from "./Context";

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push('/login')
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props}/> : null
                    }
                </AuthUserContext.Consumer>
            )
        }
    }

    return withRouter(withFirebase(WithAuthorization));
}

export default withAuthorization;