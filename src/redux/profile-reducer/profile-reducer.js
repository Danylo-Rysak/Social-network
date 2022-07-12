import {profileAPI} from "../../dal/api";

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_AVATAR = "SET-AVATAR";
const SET_FULL_NAME = "SET-FULL_NAME";
const SET_STATUS = "SET-STATUS";
const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";

const initialState = {
    profile: null,
    fullName: "",
    status: "",
    posts: [{id: 1, post: "My first post"}]
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_FULL_NAME:
            return {
                ...state,
                fullName: action.fullName
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, post: action.newPostBody}]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state
    }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setAvatar = (photos) => ({type: SET_AVATAR, photos});
export const updateFullName = (fullName) => ({type: SET_FULL_NAME, fullName});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getAvatar = (avatar) => async (dispatch) => {
    let response = await profileAPI.getAvatar(avatar);
    if (response.data.resultCode === 0) {
        dispatch(setAvatar(response.data.data.photos));
    }
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;