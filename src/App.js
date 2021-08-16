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

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hallym-Pedia</Navbar.Brand>
          <Nav className="me-auto">
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
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link as={Link} to="/Login">
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
          <div>영화화면 </div>
        </Route>
        <Route path="/Tv">
          <div>티비화면 </div>
        </Route>
        <Route path="/Book">
          <div>책화면 </div>
        </Route>
        <Route path="/Search">
          <div>검색화면 </div>
        </Route>
        <Route path="/Login">
          <div>로그인화면 </div>
        </Route>
        <Route path="/SignUp">
          <div>회원가입화면 </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
