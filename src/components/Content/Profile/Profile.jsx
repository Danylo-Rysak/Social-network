import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} fullName={props.fullName} status={props.status}
                         updateFullName={props.updateFullName} updateStatus={props.updateStatus}
                         getAvatar={props.getAvatar} isOwner={props.isOwner}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;