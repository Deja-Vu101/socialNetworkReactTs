import React from "react";

const FriendsOnline = (props) => {
	const dataFriends = props.friendsOnline;
	const yourFriendsOnline = dataFriends.map((friend, index) => {
		return(
			<div key={index}>
				<div className="cardProfile">
				<img className="cardProfile_image" src="https://abrakadabra.fun/uploads/posts/2022-01/1642881025_5-abrakadabra-fun-p-krutie-avatarki-na-standoff-40.jpg" alt="" />
				<div className="cardProfile_name">{friend.name}</div>
			</div>
			</div>
		)
	});
	return(<div className="friendsOnline">
			<div className="friendsOnline_cards">
				{yourFriendsOnline}
		</div>
    </div>);
}


export default FriendsOnline;