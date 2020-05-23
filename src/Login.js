/*
    로그인페이지 : 아이디 비번 입력후 로그인 완료 페이지로 이동
*/
import React, { useState, useCallback } from "react";
import { Link, Route } from "react-router-dom";
import Login_end from "./Login_end";
import styled from "styled-components";

const ButtonLogin = styled.button`
  width: 254px;
  height: 100px;
  background-color: #075d54;
  color: #99aa11;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;
const ButtonJoin = styled.button`
  width: 254px;
  height: 100px;
  background-color: #128c7e;
  color: #ffffff;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;
const ButtonWrap = styled.div`
  text-align: center;
`;

const LoginPage = styled.h2`
  font-size: 50px;
  text-align: center;
  color: #000000;
`;

const InputWrap = styled.div`
  display: inline-block;
  width: 500px;
  height: 250px;
  border: 4px solid #075d54;
  text-align: center;
`;
const ButtonToLogin = styled.button`
  width: 508px;
  height: 100px;
  background-color: #075d54;
  color: #ffffff;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;
const Input = styled.input`
  width: 250px;
  height: 50px;
  border: 1px solid;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  return (
    <div>
      <LoginPage>Login Page</LoginPage>
      <ButtonWrap>
        <Link to="/Login">
          <ButtonLogin>Login</ButtonLogin>
        </Link>
        <Link to="/Join">
          <ButtonJoin>Join</ButtonJoin>
        </Link>
        <br />
        <InputWrap>
          <br />
          <br />
          <Input
            type="text"
            name="id"
            placeholder="   ID"
            value={id}
            onChange={onIdChange}
          />
          <br />
          <br />
          <Input
            type="text"
            name="password"
            placeholder="   PASSWORD"
            value={password}
            onChange={onPasswordChange}
          />
        </InputWrap>
        <br />
        <Link to={`Login_end/${id}`}>
          <ButtonToLogin
            onClick={() => {
              setId({
                id: { id },
              });
              setPassword({
                password: { password },
              });
            }}
          >
            LOGIN
          </ButtonToLogin>
        </Link>
      </ButtonWrap>
    </div>
  );
};
export default Login;
