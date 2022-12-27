import UserPosts from "../../redux/components/UserPosts";
import UserProfile from "../../redux/components/UserProfile/UserProfile";
import UserLikes from "../../redux/components/UserLikes";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getComments } from "../../redux/modules/commentsSlice";
import { __getUsers } from "../../redux/modules/usersSlice";
import { Container } from "./style";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPosts());
    dispatch(__getComments());
    dispatch(__getUsers());
  }, [dispatch]);

  // 로그인하지 않았을 경우 메인으로 이동
  useEffect(() => {
    const currentUserDi = localStorage.getItem("id");
    if ( currentUserDi === null ) {
      navigate("/")
    }
  });
  
  return (
    <Container>
      <UserProfile />
      <UserPosts />
      <UserLikes />
    </Container>
  );
};

export default MyPage;
