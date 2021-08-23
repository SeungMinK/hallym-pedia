import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function HeaderNav() {
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
                  value={SearchData}
                  onChange={onSearchDataHandler}
                />
                <Nav.Link as={Link} to={`/MovieSearch/${SearchData}`}>
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
    </>
  );
}

export default HeaderNav;
