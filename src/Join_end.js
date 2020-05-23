/*
회원가입 완료 페이지 : ㅇㅇㅇ님 환영합니다. 메인으로 이동하기 버튼 추가
 */

import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

const JoinEndPage = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #000000;
`;
const JoinEndWrap = styled.div`
  text-align: center;
`;

const JoinButton = styled.button`
  width: 508px;
  height: 100px;
  background-color: #075d54;
  color: #ffffff;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;

const Join_end = ({ match }) => (
  <JoinEndWrap>
    <br />
    <br />
    <JoinEndPage>{match.params.name}님 환영합니다.</JoinEndPage>
    <br />
    <Link to="/Main">
      <JoinButton>메인으로 이동</JoinButton>
    </Link>
  </JoinEndWrap>
);
export default Join_end;
