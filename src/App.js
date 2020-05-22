import React from "react";
import { Link, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Join from "./Join";
import Login_end from "./Login_end";
import Join_end from "./Join_end";

const App = () => {
    return(
    <div>
        <Route path = "/Main" component = {Main}/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Join" component = {Join}/>
        <Route path = "/Login_end/:id" component = {Login_end}/>
        <Route path = "/Join_end/:name" component = {Join_end}/>
    </div>
    );
};

export default App;
