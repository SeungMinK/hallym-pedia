import "./App.css";
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

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hallym-Pedia</Navbar.Brand>
          <Nav className="justify-content-start">
            <Nav.Link as={Link} to="/Movie">
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
              />
              <Link to = "/MovieSearch">
                <Button variant="outline-success">Search</Button>
              </Link>
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
      <Route exact path="/"></Route>

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
        <Route path="/SignIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/SignUp">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </>
  );
}

export default App;
