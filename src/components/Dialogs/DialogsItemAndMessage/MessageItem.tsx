import React from "react";

interface OwnPropsType{
  message: string
}
const MessageItem: React.FC<OwnPropsType> = ({message}) => {
  return <div className="message">{message}</div>;
};

export default MessageItem;