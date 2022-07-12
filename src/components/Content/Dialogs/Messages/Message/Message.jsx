import s from "../../../Profile/Posts/Posts.module.css";
import cross from "../../../../../assets/cross.png";

const Message = (props) => {
    return (
        <div className={s.post__wrapper}>
            <div className={s.post}>
                <div className={s.post__post}>{props.message}</div>
            <button className={s.post__button} onClick={() => {
                props.deleteMessage(props.id);
            }} ><img className={s.post__img} src={cross} alt="cross"/></button>
            </div>
        </div>
    )
};

export default Message;