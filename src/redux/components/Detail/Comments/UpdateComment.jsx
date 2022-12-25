import { useRef } from "react";

const UpdateComment = ({comment}) => {

    const changeInput = useRef();
    const userComment = useRef();

    // 수정 버튼

  const changeButtonHandler = (id) => {
    changeInput.current.style = "display:block"
    userComment.current.style = "display:none"
  };

    return (
        <div>
            <br />
            {/* <CategoryStyle color={color}>
              {co.isA === 'true' ? theA : theB}
            </CategoryStyle> */}
            <div>
              <span ref={userComment}>{comment.comment}</span>
              <input style={{display: "none"}} ref={changeInput} />
              <span>작성자 ID</span>
              <span id='comment'>
                <button
                  type='button'
                  onClick={changeButtonHandler}>
                  수정
                </button>
                
              </span>
            </div>
          </div>
    );
};

export default UpdateComment;
