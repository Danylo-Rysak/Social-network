import AddPostForm from "./AddPostForm";
import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = (props) => {
    let post = [...props.posts].reverse().map(p => <Post id={p.id} post={p.post} key={p.post} deletePost={props.deletePost}/>)

    return (
        <div>
            <PostsTitle/>
            <div className={s.posts}>
                <AddPostForm posts={props.posts} addPost={props.addPost}/>
                <div>{post}</div>
            </div>
        </div>
    )
};

const PostsTitle = () => {
    return (
        <div>
            <div className={s.posts__title}>What is new?</div>
        </div>
    )
};


export default Posts;