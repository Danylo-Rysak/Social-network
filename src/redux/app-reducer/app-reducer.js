import {getAuthUserData} from "../auth-reducer/auth-reducer";

const INITIALIZED_SUCCESSES = 'INITIALIZED-SUCCESSES';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const initializedSuccesses = () => ({type: INITIALIZED_SUCCESSES});

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccesses());
    });
};

export default appReducer;