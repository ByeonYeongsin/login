/*
회원가입 완료 페이지 : ㅇㅇㅇ님 환영합니다. 메인으로 이동하기 버튼 추가
 */

import React from "react";
import {Link, Route} from 'react-router-dom';

const Join_end = ({match}) => (
    <div>
        <p>{match.params.name}님 환영합니다.</p>
        <Link to = "/Main"><button>메인으로 이동</button></Link>
    </div>
);
export default Join_end;