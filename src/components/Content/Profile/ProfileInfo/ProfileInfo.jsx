import ProfileStatus from "./ProfileStatus";
import Preloader from "../../../../common/Preloader/Preloader";
import userImg from "../../../../assets/user.png";
import uploadAvatar from "../../../../assets/uploadAvatar.png";
import s from './ProfileInfo.module.css';
import ProfileName from "./ProfileName";
import preloader from "../../../../assets/preloader.gif";


const ProfileInfo = (props) => {
    const onAvatarChange = (e) => {
        if (e.target.files.length) {
            return props.getAvatar(e.target.files[0]);
        }
    }

    if (!props.profile) return <Preloader preloader={preloader}/>
    return (
        <div className={s.profile}>
            <div className={s.profile__button}>
                {props.isOwner &&
                    <input className={s.button__file} id="file" name="file" onChange={onAvatarChange} type="file"/>}
                <label htmlFor="file"><img className={s.button__img} src={uploadAvatar} alt="uploadAvatar"/></label>
            </div>
            <div className={s.profile__info}>
                <img className={s.info__avatar} src={props.profile.photos.large || userImg} alt="avatar"/>
                <h2 className={s.info__name}><ProfileName fullName={props.fullName} updateFullName={props.updateFullName}/></h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;