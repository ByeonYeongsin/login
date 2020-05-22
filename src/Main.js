/*
메인 페이지 : 회원가입 로그인 버튼으로 각 페이지로 이동하게 만들기.
 */

import React from "react";
import {Link, Route} from 'react-router-dom';
import Login from "./Login";
import Join from "./Join";
import Login_end from "./Login_end";
import Join_end from "./Join_end";

const Main = () =>(
    <div>
        <br/>메인페이지입니다.<br/>
        <button><Link to = "/Login">Login</Link></button>
        <button><Link to = "/Join">Join</Link></button>
    </div>
);

export default Main;