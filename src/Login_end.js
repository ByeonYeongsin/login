/*
로그인 완료 페이지 : ㅇㅇㅇ님 로그인 하셨습니다. 가 출력되며 로그아웃 버튼을 누를시 메인 페이지로 이동
 */

import React from "react";
import { Link, Route } from "react-router-dom";

const Login_end = ({match}) => {
  return (
    <div>
      <p>{match.params.id}님 로그인 하셨습니다.</p>
      <Link to="/Main">
        <button>Logout</button>
      </Link>
    </div>
  );
};
export default Login_end;
