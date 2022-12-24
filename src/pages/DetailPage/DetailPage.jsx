import React from "react";
import Comments from "../../redux/components/Detail/Comments";
import CommentUpload from "../../redux/components/Detail/CommentUpload";
import Post from "../../redux/components/Detail/Post";

const DetailPage = () => {
  return (
    <div>
      <Post />
      <CommentUpload />
      <Comments />
    </div>
  );
};

export default DetailPage;
