import User from "./User/User";
import Paginator from "../../../common/Paginator/Paginator";
import s from './Users.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import preloader_users from "../../../assets/preloader_users.gif";

const Users = (props) => {
    let user = props.users.map(u => <User id={u.id} followed={u.followed} photos={u.photos}
                                          name={u.name} status={u.status} key={u.users}
                                          followingInProgress={props.followingInProgress}
                                          followUser={props.followUser} unfollowUser={props.unfollowUser}/>);
    return (
        <div className={s.users}>
            <div className={s.users__title}>Users</div>
            <div className={s.users__user}>{user}</div>
            <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
                       onPageChange={props.onPageChange} totalUsersCount={props.totalUsersCount}/>
            {props.isFetching ? <Preloader preloader={preloader_users}/> : null}
        </div>
    )
};

export default Users;