import s from '../Users.module.css';
import {NavLink} from "react-router-dom";
import userImg from "../../../../assets/userImg.png";

const User = (props) => {

    const checkName = (name) => {
        const checkedName = 'Name'
        if (name.length > 10) {
            return checkedName;
        } else {
            return name;
        }
    };

    return (
        <div className={s.user}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img className={s.user__img} src={props.photos.small !== null ? props.photos.small : userImg}
                         alt="userImg"/>
                </NavLink>
            </div>

            <div>
                <span className={s.user__info}>{checkName(props.name)}</span>
            </div>

            <div>
                {props.followed
                    ?
                    <button className={s.user__button} disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.unfollowUser(props.id)
                            }}>Unfollow</button>
                    :
                    <button className={s.user__button} disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.followUser(props.id)
                            }}>Follow</button>}
            </div>
        </div>)
}

export default User;