import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer/auth-reducer";
import {useEffect} from "react";

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    });

    return (
        <div>
            <Header login={props.login} isAuth={props.isAuth} logout={props.logout}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    login: state.authData.login,
    isAuth: state.authData.isAuth
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);