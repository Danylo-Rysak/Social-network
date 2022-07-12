import {connect} from "react-redux";
import {deleteCaptchaUrl, login} from "../../redux/auth-reducer/auth-reducer";
import LoginForm from "./LoginForm";

const Login = (props) => {
    return (
        <div>
            <LoginForm {...props}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.authData.captchaUrl
});

export default connect(mapStateToProps, {login, deleteCaptchaUrl})(Login);