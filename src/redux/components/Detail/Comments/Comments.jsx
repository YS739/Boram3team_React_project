import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const { error } = useSelector((state) => state.comments);
  const globalComment = useSelector((state) => state.comments.comment);
  console.log(globalComment);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {globalComment?.map((co) => {
        return <div key={co.id}>{co.comment}</div>;
      })}
    </div>
  );
};

export default Comments;
