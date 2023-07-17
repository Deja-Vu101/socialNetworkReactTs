import React from "react";
import { NavLink } from "react-router-dom";

interface OwnPropsType {
  name: string;
  id: number;
}

const DialogsItem: React.FC<OwnPropsType> = ({ id, name }) => {
  return (
    <div className="dialog">
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogsItem;
