import s from "./Dialog.module.css";
import style from "../../../Navbar/Navbar.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {
    let dialog = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.name}/>);

    return (
        <div className={s.dialog}>
            <div className={style.navbar__title}>
                Users
            </div>
            {dialog}
        </div>
    )
};

export default Dialog;