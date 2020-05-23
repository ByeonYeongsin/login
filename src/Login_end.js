/*
로그인 완료 페이지 : ㅇㅇㅇ님 로그인 하셨습니다. 가 출력되며 로그아웃 버튼을 누를시 메인 페이지로 이동
 */

import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

const LoginEndPage = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #000000;
`;
const LoginEndWrap = styled.div`
  text-align: center;
`;

const LogoutButton = styled.button`
  width: 508px;
  height: 100px;
  background-color: #075d54;
  color: #ffffff;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;

const Login_end = ({ match }) => {
  return (
    <LoginEndWrap>
      <br />
      <br />
      <LoginEndPage>{match.params.id}님 로그인 하셨습니다.</LoginEndPage>
      <br />
      <Link to="/Main">
        <LogoutButton>Logout</LogoutButton>
      </Link>
    </LoginEndWrap>
  );
};
export default Login_end;
