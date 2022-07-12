import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import profile from '../../assets/profile.png';
import users from '../../assets/users.png';
import dialogs from '../../assets/dialogs.png';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__title}>
                Menu Box
            </div>
            <div className={s.navbar__box__item}>
                <img className={s.box__item__icon} src={profile} alt="profile"/>
                <NavLink className={s.box__item__item} to="/profile">Profile</NavLink>
            </div>
            <div className={s.navbar__box__item}>
                <img className={s.box__item__icon} src={users} alt="users"/>
                <NavLink className={s.box__item__item} to="/users">Users</NavLink>
            </div>
            <div className={s.navbar__box__item}>
                <img className={s.box__item__icon} src={dialogs} alt="dialogs"/>
                <NavLink className={s.box__item__item} to="/dialogs">Dialogs</NavLink>
            </div>
        </div>
    )
};

export default Navbar;