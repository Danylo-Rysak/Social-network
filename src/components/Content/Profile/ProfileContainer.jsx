import Profile from "./Profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {
    getAvatar,
    getProfile,
    getStatus, updateFullName,
    updateStatus
} from "../../../redux/profile-reducer/profile-reducer";
import React from 'react';
import withRouter from "../../../hoc/withRouter";

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getProfile(userId);
        props.getStatus(userId);
    }, []);

    return (
        <div>
            <Profile profile={props.profile} getAvatar={props.getAvatar} status={props.status}
                     fullName={props.fullName} updateFullName={props.updateFullName}
                     updateStatus={props.updateStatus} isOwner={!props.router.params.userId}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    fullName: state.profileData.fullName,
    status: state.profileData.status,
    authorizedUserId: state.authData.userId
});

export default connect(mapStateToProps, {getProfile, getStatus, updateFullName, updateStatus, getAvatar})
(withRouter(ProfileContainer));