import "./App.css";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";
import Movie from "./Content/Movie";
import Tv from "./Content/Tv";
import Book from "./Content/Book";

import MovieInfo from "./MovieInfo/MovieInfo";
import MovieSearch from "./MovieSearch/MovieSearch.js";

import Header from "./headerNav";

function App() {
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

          <Route path="/MovieInfo">
            <MovieInfo></MovieInfo>
          </Route>

          <Route path="/MovieSearch">
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
