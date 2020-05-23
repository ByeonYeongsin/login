/*
메인 페이지 : 회원가입 로그인 버튼으로 각 페이지로 이동하게 만들기.
 */

import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
const ButtonLogin = styled.button`
  width: 254px;
  height: 100px;
  background-color: #075d54;
  color: #ffffff;
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
const MainPage = styled.h2`
  font-size: 50px;
  text-align: center;
  color: #000000;
`;

const Main = () => (
  <div>
    <MainPage>Main</MainPage>
    <ButtonWrap>
      <Link to="/Login">
        <ButtonLogin>Login</ButtonLogin>
      </Link>
      <Link to="/Join">
        <ButtonJoin>Join</ButtonJoin>
      </Link>
    </ButtonWrap>
  </div>
);

export default Main;
