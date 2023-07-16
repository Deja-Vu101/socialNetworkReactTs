import React from "react";

const Post = (props) => {
  var data = props.users;
  var templateUsers = data.map(function (item, index) {
    return (
      <div key={index}>
			 <div className="post-wrapper">
			<div className="post-avatarUser"></div>
          <div className="post-bodyText">
            <h2 className="post-caption">{item.author}</h2>
            <p className="post-userText">{item.message}</p>
          </div>
        </div>
		</div>
      
    )
  });
  return (
	  <div className="doneTemplateUsers">
	  {templateUsers}
	  </div>
  );
};

export default Post;
