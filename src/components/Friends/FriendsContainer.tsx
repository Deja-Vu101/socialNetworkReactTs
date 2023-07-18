import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserType } from "../../types/types";
import List from "../List";
import Friends from "./Friends";
import { useEffect } from "react";

interface OwnProps {
}

const FriendsContainer: React.FC<OwnProps> = () => {
  const { fetchFriends } = useTypedDispatch();
  const { isFetching, friends } = useTypedSelector((state) => state.usersPage);

  useEffect(() => {
    fetchFriends();
  }, []);
  return (
    <>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <List
            items={friends}
            renderItem={(friends: UserType) =>
              friends.followed === true ? <Friends friends={friends} key={friends.id} /> : null
            }
          />
        </>
      )}
    </>
  );
};

export default FriendsContainer;
