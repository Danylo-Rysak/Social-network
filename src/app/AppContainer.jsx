import App from "./App";
import {connect} from "react-redux";
import {useEffect} from "react";
import {initializedApp} from "../redux/app-reducer/app-reducer";
import {useNavigate} from "react-router-dom";

const AppContainer = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        props.initializedApp();
            if (props.isAuth) {
                navigate('/profile')
            } else
            if (!props.isAuth) {
                navigate('/login');
            }
        }, [props.isAuth]);

    return (
        <div>
            <App {...props}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuth,
    initialized: state.appData.initialized
});

export default connect(mapStateToProps, {initializedApp})(AppContainer);