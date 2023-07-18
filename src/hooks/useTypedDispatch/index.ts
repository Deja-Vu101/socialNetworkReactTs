import {fetchUsers, postUserUnfollow, postUserFollow, searchUser, fetchFriends} from "../../redux/users-reducer";
import { fetchUserProfile } from '../../redux/profile-reducer';

export default {
	fetchUserProfile,
	fetchUsers,
	postUserFollow,
	postUserUnfollow,
	searchUser,
	fetchFriends
};