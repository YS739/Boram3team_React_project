import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  __changeComment,
  __deleteComment,
  // __changeCategory,
} from '../../../modules/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Btn, DelBtn, CategoryA, CategoryB, CategoryBox } from './style';

const CommentEditDelete = ({ comments }) => {
  const dispatch = useDispatch();
  const [commentChange, setCommentChange] = useState(comments?.comment);
  const [completeDisplay, setCompleteDisplay] = useState('none');
  const [editDisplay, setEditDisplay] = useState('none');
  const [deleteDisplay, setDeleteDisplay] = useState('none');
  const [categoryDisplay, setCategoryDisplay] = useState('none');
  const [changeCategory, setChangeCategory] = useState(comments?.isA);

  const changeInput = useRef();
  const userComment = useRef();

  // 카테고리 값들
  const { posts } = useSelector((state) => state.posts);
  const param = useParams();
  const thePost = posts.find((post) => post.id === param.id);
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;
  const theId = thePost?.id;

  const changeShow = (e) => {
    setCommentChange(e.target.value);
  };

  // 작성자 ID 확인
  const currentUserDi = localStorage.getItem('id');

  //수정 버튼
  useEffect(() => {
    if (comments.user === currentUserDi) {
      setEditDisplay('block');
      setDeleteDisplay('block');
    }
  }, []);

  const editButtonHandler = () => {
    setCategoryDisplay('block');
    changeInput.current.style = 'display:block';
    userComment.current.style = 'display:none';
    changeInput.current.focus();
    setCompleteDisplay('block');
    setEditDisplay('none');
  };

  // 완료 버튼
  const completeButtonHandler = (id) => {
    changeInput.current.style = 'display:none';
    userComment.current.style = 'display:block';
    setCompleteDisplay('none');
    setEditDisplay('block');

    const categories = document.getElementsByName('category');
    const selected = Array.from(categories).find((choice) => choice.checked);

    const eidtComment = {
      id: comments.id,
      postNumber: comments.postNumber,
      comment: commentChange,
      isA: selected.value,
      date: comments.date,
    };

    if (commentChange) {
      dispatch(__changeComment(eidtComment));
    } else {
      alert('댓글을 입력해주세요');
    }
    setCategoryDisplay('none');
  };

  //삭제버튼
  const deleteButtonHandler = (id) => {
    if (window.confirm('삭제할까요??') === true) {
      dispatch(__deleteComment(id));
    } else {
      return;
    }
  };

  return (
    <div>
      <br />
      <div>
        <CategoryBox dp={categoryDisplay} value={commentChange}>
          <CategoryA>
            <input type='radio' name='category' id='a' value='true' />
            <label htmlFor='a'>A: {theA}</label>
          </CategoryA>
          <CategoryB>
            <input type='radio' name='category' id='b' value='false' />
            <label htmlFor='b'>B: {theB}</label>
          </CategoryB>
        </CategoryBox>
        <span ref={userComment}>{comments?.comment}</span>
        <input
          style={{ display: 'none' }}
          ref={changeInput}
          value={commentChange}
          onChange={changeShow}
        />
        <span>작성자 ID</span>
        <span id='comment'>
          <Btn dp={editDisplay} type='button' onClick={editButtonHandler}>
            수정
          </Btn>
          <Btn dp={completeDisplay} onClick={completeButtonHandler}>
            완료
          </Btn>
          <DelBtn
            type='button'
            dp={deleteDisplay}
            onClick={() => deleteButtonHandler(comments.id)}
          >
            삭제
          </DelBtn>
        </span>
      </div>
    </div>
  );
};

export default CommentEditDelete;
