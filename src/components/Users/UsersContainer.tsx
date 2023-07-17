import { useDispatch, useSelector } from "react-redux";
import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";
import Users from "./Users";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import List from "../List";
import { UserType } from "../../types/types";
import Pagination from "../Pagination";

const UsersContainer = () => {
  const { fetchUsers } = useTypedDispatch();
  const { currentPage, isFetching, users } = useTypedSelector(
    (state) => state.usersPage
  );
  const length = users.length;

  const [page, setPage] = useState(currentPage);
  const changePage = (page: number) => {
    setPage(page)
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Pagination length={length} page={page} setPage={changePage} />

          <List
            items={users}
            renderItem={(users: UserType) => (
              <Users
                key={users.id}
                id={users.id}
                photos={users.photos}
                followed={users.followed}
                name={users.name}
                status={users.status}
              />
            )}
          />
        </>
      )}
    </>
  );
};

export default UsersContainer;

//let mapStateToProps = (state: any): MapStateToPropsType => {
//  return {
//    users: state.usersPage.users,
//    pageSize: state.usersPage.pageSize,
//    totalCount: state.usersPage.totalCount,
//    currentPage: state.usersPage.currentPage,
//    isFetching: state.usersPage.isFetching,
//    profile: state.profilePage.profile,
//  };
//};

//type MapDispatchToProps = {
//  follow: (usersId: number) => void;
//  unFollow: (usersId: number) => void;
//  setUsers: (users: Array<UserType>) => void;
//  pageWalk: (page: number) => void;
//  toggleIsFetching: (isFetching: boolean) => void;
//};
//let mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
//  return {
//    follow: (usersId: number) => {
//      dispatch(actions.followAC(usersId));
//    },
//    unFollow: (usersId: number) => {
//      dispatch(actions.unFollowAC(usersId));
//    },
//    setUsers: (users: Array<UserType>) => {
//      dispatch(actions.setUsersAC(users));
//    },
//    pageWalk: (page: number) => {
//      dispatch(actions.pageWalkAC(page));
//    },
//    toggleIsFetching: (isFetching: boolean) => {
//      dispatch(actions.toggleIsFetchingAC(isFetching));
//    },
//  };
//};

//let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
//export default UsersContainer;
