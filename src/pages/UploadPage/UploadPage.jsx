import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UploadPage = () => {
  const [title, setTitle] = useState();
  const [acontents, setAcontents] = useState();
  const [bcontents, setBcontents] = useState();

  const addTitle = (event) => {
    event.preventDefault();
    if (!title) {
      alert("주제를 입력해주세요");
      return;
    }
    if (!acontents) {
      alert("A의 내용을 입력해 주세요");
      return;
    }
    if (!bcontents) {
      alert("B의 내용을 입력해 주세요");
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      acontents,
      bcontents,
    };
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const acontentsChange = (event) => {
    setAcontents(event.target.value);
  };

  const bcontentsChange = (event) => {
    setBcontents(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTitle}>
        <section>
          <h1>토론주제</h1>
          <input value={title} onChange={titleChange} />
          <br></br>
          <h2>선택분류</h2>
          <p>A</p> : <input value={acontents} onChange={acontentsChange} />
          <p>B</p> : <input value={bcontents} onChange={bcontentsChange} />
          <button>등록</button>
        </section>
      </form>
    </div>
  );
};

export default UploadPage;
