import React from "react";

const Posts = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <hr />
    </div>
  );
};

export default Posts;
