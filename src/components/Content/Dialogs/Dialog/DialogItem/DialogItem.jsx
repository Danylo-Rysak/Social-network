import {NavLink} from "react-router-dom";
import style from "../../../../Navbar/Navbar.module.css";
import user from "../../../../../assets/profile.png";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.navbar__box__item}>
            <img className={style.box__item__icon} src={user} alt="profile"/>
            <NavLink className={style.box__item__item} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;