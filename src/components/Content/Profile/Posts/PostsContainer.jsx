import Posts from "./Posts";
import {connect} from "react-redux";
import {addPost, deletePost} from "../../../../redux/profile-reducer/profile-reducer";

const PostsContainer = (props) => {
    return (
        <div>
            <Posts {...props}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    posts: state.profileData.posts
});

let mapDispatchToProps = (dispatch) => ({
    addPost: (newPostBody) => {
        dispatch(addPost(newPostBody));
    },
    deletePost: (postId) => {
        dispatch(deletePost(postId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);