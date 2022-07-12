import {authAPI, securityAPI} from "../../dal/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.authData
            }
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    authData: {userId, email, login, isAuth}
});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, authData: {captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
};

export const deleteCaptchaUrl = () => async (dispatch) => {
    const captchaUrl = '';
    dispatch(setCaptchaUrl(captchaUrl));
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export default authReducer;