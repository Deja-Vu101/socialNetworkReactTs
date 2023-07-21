import { fetchUserProfile } from '../../redux/thunks/fetchUserProfile';
import { authMe } from '../../redux/thunks/authMe';
import { fetchUsers } from '../../redux/thunks/fetchUsers';
import { fetchFriends } from '../../redux/thunks/fetchFriends';
import { postUserFollow, postUserUnfollow } from '../../redux/thunks/postFollowUnfollow';
import { searchUser } from '../../redux/thunks/searchUsers';

export default {
	fetchUserProfile,
	fetchUsers,
	postUserFollow,
	postUserUnfollow,
	searchUser,
	fetchFriends,
	authMe
};