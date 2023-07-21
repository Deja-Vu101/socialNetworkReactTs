import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserType } from "../../types/types";
import List from "../List";
import Friends from "./Friends";
import { useEffect } from "react";

interface OwnProps {}

const FriendsContainer: React.FC<OwnProps> = () => {
  const { fetchFriends } = useTypedDispatch();
  const { isFetching, friends} = useTypedSelector((state) => state.usersPage);

  useEffect(() => {
    fetchFriends();
  }, []);
  return (
    <>
      {/*{friends.length !== 0 ?? <h2>List empty</h2> }*/}
      {isFetching && friends.length !== 0 ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {friends.length !== 0 ? (
            <List
              items={friends}
              renderItem={(friend: UserType) => (
                <Friends friends={friend} key={friend.id} />
              )}
            />
          ) : (
            <h2>List empty</h2>
          )}
        </>
      )}
    </>
  );
};

export default FriendsContainer;
