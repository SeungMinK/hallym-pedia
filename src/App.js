import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hallym-Pedia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>영화</Nav.Link>
            <Nav.Link>TV프로그램</Nav.Link>
            <Nav.Link>책</Nav.Link>
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
            <Nav.Link>로그인</Nav.Link>
            <Nav.Link>회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>ㅎㅇ</div>
    </>
  );
}

export default App;
