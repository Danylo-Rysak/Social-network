import s from '../Posts.module.css';
import cross from '../../../../../assets/cross.png';

const Post = (props) => {
    return (
        <div className={s.post__wrapper}>
            <div className={s.post}>
                <div className={s.post__post}>{props.post}</div>
                <button className={s.post__button} onClick={() => {
                    props.deletePost(props.id)
                }}><img className={s.post__img} src={cross} alt="cross"/></button>
            </div>
        </div>
    )
}

export default Post;