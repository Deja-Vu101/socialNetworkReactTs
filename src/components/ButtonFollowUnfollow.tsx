import { useState } from "react";
import { useTypedDispatch } from "../hooks/useTypedDispatch/useTypedDispatch";

interface OwnProps {
  followed: boolean;
  id: number
}

const ButtonFollowUnfollow: React.FC<OwnProps> = ({ followed, id }) => {
  const { postUserFollow, postUserUnfollow } = useTypedDispatch();
  const [valueFollowUnfollow, setValueFollowUnfollow] = useState(
    followed ? "UNFOLLOW" : "FOLLOW"
  );

  const toggleFollowUnfollow = (id: number, action: string) => {
    action === "FOLLOW" ? postUserFollow(id) : postUserUnfollow(id);
  };

  const handleFollowBtn = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    setValueFollowUnfollow((prevValue) =>
      prevValue === "FOLLOW" ? "UNFOLLOW" : "FOLLOW"
    );
    toggleFollowUnfollow(id, valueFollowUnfollow);
  };
  return (
    <div className="user_btn">
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleFollowBtn(e, id)
        }
      >
        {valueFollowUnfollow}
      </button>
    </div>
  );
};

export default ButtonFollowUnfollow;
