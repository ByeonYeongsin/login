/*
회원가입 페이지 : 여러 Form(자유) 회원가입 완료 페이지로 이동
 */
import React, { useCallback, useState } from "react";
import { Link, Route } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  return (
    <div>
      <p>회원가입 페이지</p>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={onNameChange}
      />
      <br />
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onIdChange}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onPasswordChange}
      />
      <br/>
        <Link to = {`Join_end/${name}`}><button>회원가입</button></Link>
    </div>
  );
};
export default Join;
