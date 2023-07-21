import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";
import Users from "./Users";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import List from "../List";
import { UserType } from "../../types/types";
import Pagination from "../Pagination";
import { useDebounce } from "../../hooks/useDebounce";
import Input from "../Input";

const UsersContainer = () => {
  const { fetchUsers, postUserFollow, postUserUnfollow, searchUser } =
    useTypedDispatch();
  const { currentPage, isFetching, users } = useTypedSelector(
    (state) => state.usersPage
  );
  const length = users.length;

  const [page, setPage] = useState(currentPage);
  const [inputValue, setInputValue] = useState("");
  const debounceSearchQuery = useDebounce(inputValue, 800);

  const changePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  useEffect(() => {
    if (inputValue.length !== 0) {
      searchUser(debounceSearchQuery);
    }
  }, [debounceSearchQuery]);

  const toggleFollowUnfollow = (id: number, action: string) => {
    action === "FOLLOW" ? postUserFollow(id) : postUserUnfollow(id);
  };

  const onChangeSearchUser = (searchQuery: string) => {
    setInputValue(searchQuery);
  };

  return (
    <>
      <Pagination length={length} page={page} setPage={changePage} />
      <Input inputValue={inputValue} onChangeSearchUser={onChangeSearchUser} />
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
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
                toggleFollowUnfollow={toggleFollowUnfollow}
              />
            )}
          />
        </>
      )}
    </>
  );
};

export default UsersContainer;
