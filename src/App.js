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

function App() {
  //데이터를 사용하는 상위 컴퍼넌트에서 -> 하위 컴퍼넌트로
  let [SearchData, setSearchData] = useState("");

  const onSearchDataHandler = (event) => {
    setSearchData(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    console.log("searchData 값  : " + SearchData);
  };

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Hallym-Pedia</Navbar.Brand>
            <Nav className="justify-content-start">
              <Nav.Link as={Link} to="/Movie?">
                영화
              </Nav.Link>
              <Nav.Link as={Link} to="/Tv">
                TV프로그램
              </Nav.Link>
              <Nav.Link as={Link} to="/Book">
                책
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="영화 제목,배우,감독을 검색해보세요"
                  size="sm"
                  className="mr-sm-2"
                  value={SearchData}
                  onChange={onSearchDataHandler}
                />
                <Nav.Link as={Link} to="/MovieSearch">
                  <Button
                    variant="outline-success"
                    type="submit"
                    onClick={onSubmitHandler}
                  >
                    Search
                  </Button>
                </Nav.Link>
              </Form>

              <Nav.Link as={Link} to="/SignIn">
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/SignUp">
                회원가입
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

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
            <MovieSearch SearchData={SearchData}></MovieSearch>
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
