/*
로그인페이지 : 아이디 비번 입력후 로그인 완료 페이지로 이동
 */
import React, { useState, useCallback } from "react";
import { Link, Route } from "react-router-dom";
import Login_end from "./Login_end";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  let name = id;
  return (
    <div>
      <p>로그인 페이지</p>
      <input
        type="text"
        name="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={onIdChange}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={onPasswordChange}
      />
      <br />
      <button
        onClick={() => {
          setId({
            id: { id },
          });
          setPassword({
            password: { password },
          });
        }}
      >
        <Link to={`Login_end/${id}`}>로그인</Link>
      </button>
    </div>
  );
};
export default Login;
