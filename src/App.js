import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Join from "./Join";
import Login_end from "./Login_end";
import Join_end from "./Join_end";
import MapBackground from "./MapBackground";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/Main" component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/Join" component={Join} />
        <Route path="/Login_end/:id" component={Login_end} />
        <Route path="/Join_end/:name" component={Join_end} />
        <Route path="/MapBackground" component={MapBackground} />
        <Route
          render={({ location }) => (
            <div>
              <h2>ERROR!!!</h2>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
