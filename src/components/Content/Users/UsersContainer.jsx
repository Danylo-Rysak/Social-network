import Users from "./Users";
import {connect} from "react-redux";
import {followUser, getUsers, unfollowUser} from "../../../redux/users-reducer/users-reducer";
import {useEffect} from "react";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, [props.currentPage, props.pageSize]);

    const onPageChange = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize);
    }

    return (
        <div>
            <Users
                followUser={props.followUser}
                unfollowUser={props.unfollowUser}
                onPageChange={onPageChange}
                users={props.users}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                followingInProgress={props.followingInProgress}
                isFetching={props.isFetching}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    users: state.usersData.users,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    pageSize: state.usersData.pageSize,
    isFetching: state.usersData.isFetching,
    followingInProgress: state.usersData.followingInProgress
});

export default connect(mapStateToProps, {getUsers, followUser, unfollowUser})(UsersContainer);