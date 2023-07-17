import { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import { IProfilePage } from "../../../types/types";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";

interface OwnPropsType {
  myProfilePage: IProfilePage;
}

const MyProfile: React.FC<OwnPropsType> = ({ myProfilePage }) => {
  const { fetchUserProfile } = useTypedDispatch();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  //if (!isAuth) return <Navigate to={'/login'} />
  return (
    <>
      {myProfilePage.isFetching ? (
        <h2>LOADING... </h2>
      ) : (
        <ProfileInfo profile={myProfilePage.profile} />
      )}

      {/*<MyPostsContainer {...posts} />*/}
    </>
  );
};

export default MyProfile;
