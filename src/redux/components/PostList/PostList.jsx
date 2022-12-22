import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPosts = () => {
  return axios.get("http://localhost:3001/posts");
};
const PostList = () => {
  const posts = useQuery(["posts"], getPosts, {
    onSuccess: (data) => {
      console.log("성공", data.data);
    },
  });

  return (
    <>
      <div>안녕안녕 핑크퐁!</div>
    </>
  );
};
export default PostList;
