import "./App.css";
import { useState } from "react";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { Link, Route, Switch } from "react-router-dom";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";
import Movie from "./Content/Movie";
import Tv from "./Content/Tv";
import Book from "./Content/Book";

import MovieInfo from "./MovieInfo/MovieInfo";
import MovieSearch from "./MovieSearch/MovieSearch";

import Header from "./HeaderNav";

function App() {
  //데이터를 사용하는 상위 컴퍼넌트에서 -> 하위 컴퍼넌트로

  return (
    <>
      <Header></Header>
      <section>
        <Route exact path="/">
          <Movie></Movie>
        </Route>

        <Switch>
          <Route path="/Movie">
            <Movie></Movie>
          </Route>
          <Route path="/Tv">
            <Tv></Tv>
          </Route>
          <Route path="/Book">
            <Book></Book>
          </Route>
          <Route path="/Search">
            <div>검색화면 </div>
          </Route>

          <Route path="/MovieInfo/:title">
            <MovieInfo></MovieInfo>
          </Route>

          <Route path="/MovieSearch/:searchData">
            <MovieSearch></MovieSearch>
          </Route>

          <Route path="/SignIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/SignUp">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </section>
    </>
  );
}

export default App;
