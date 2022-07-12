import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer/auth-reducer";
import appReducer from "./app-reducer/app-reducer";
import profileReducer from "./profile-reducer/profile-reducer";
import usersReducer from "./users-reducer/users-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import { devToolsEnhancer } from '@redux-devtools/extension';
const store = configureStore({
    reducer: {
        authData : authReducer,
        appData : appReducer,
        profileData : profileReducer,
        usersData : usersReducer,
        dialogsData : dialogsReducer,
    }
}, devToolsEnhancer());

export default store;