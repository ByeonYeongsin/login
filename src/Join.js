/*
회원가입 페이지 : 여러 Form(자유) 회원가입 완료 페이지로 이동
 */
import React, { useCallback, useState, useEffect } from "react";
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
  color: #99aa11;
  text-align: center;
  border: 0px solid;
  font-size: 30px;
`;
const ButtonWrap = styled.div`
  text-align: center;
`;

const JoinPage = styled.h2`
  font-size: 50px;
  text-align: center;
  color: #000000;
`;

const InputWrap = styled.div`
  display: inline-block;
  width: 500px;
  height: 300px;
  border: 4px solid #128c7e;
  text-align: center;
`;
const ButtonToJoin = styled.button`
  width: 508px;
  height: 100px;
  background-color: #128c7e;
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

const Join = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [check, setCheck] = useState("");
  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onPasswordCheckChange = useCallback((e) => {
    setPasswordCheck(e.target.value);
  }, []);

  useEffect(() => {
    if (password === passwordCheck) {
      setCheck("");
    } else {
      setCheck("비밀번호가 일치하지 않습니다.");
    }
  });

  return (
    <div>
      <JoinPage>Join Page</JoinPage>
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
          <Input
            type="text"
            name="name"
            placeholder="   NAME"
            value={name}
            onChange={onNameChange}
          />
          <br />
          <Input
            type="text"
            name="id"
            placeholder="   ID"
            value={id}
            onChange={onIdChange}
          />
          <br />
          <Input
            type="text"
            name="password"
            placeholder="   PASSWORD"
            value={password}
            onChange={onPasswordChange}
          />
          <Input
            type="text"
            name="passwordCheck"
            placeholder="   PASSWORD CHECK"
            value={passwordCheck}
            onChange={onPasswordCheckChange}
          />
          <br />
          <br />
          {check}
        </InputWrap>
        <br />
        <Link to={`Join_end/${name}`}>
          <ButtonToJoin
            onclick={() => {
              setId({
                id: { id },
              });
              setPassword({
                password: { password },
              });
              setName({
                name: { name },
              });
              setPasswordCheck({
                passwordCheck: { passwordCheck },
              });
            }}
          >
            JOIN
          </ButtonToJoin>
        </Link>
      </ButtonWrap>
    </div>
  );
};
export default Join;
