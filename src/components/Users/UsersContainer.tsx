import { connect } from "react-redux";
import {
  actions
} from "../../redux/users-reducer";
import Users from "./Users";
import { ProfileType, UserType } from "../../types/types";
//import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  profile: ProfileType | null;
};
let mapStateToProps = (state: any): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    profile: state.profilePage.profile,
  };
};

type MapDispatchToProps = {
  follow: (usersId: number) => void;
  unFollow: (usersId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  pageWalk: (page: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};
let mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
  return {
    follow: (usersId: number) => {
      dispatch(actions.followAC(usersId));
    },
    unFollow: (usersId: number) => {
      dispatch(actions.unFollowAC(usersId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(actions.setUsersAC(users));
    },
    pageWalk: (page: number) => {
      dispatch(actions.pageWalkAC(page));
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(actions.toggleIsFetchingAC(isFetching));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
