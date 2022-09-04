import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" className="shadow">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="mx-3 w-100 d-flex">
            <div className='justify-content-start w-100'>
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <div className='d-flex'>
                  <Nav.Link className="text-light me-2" href="#action1">Home</Nav.Link>
                  <Nav.Link className="text-light me-2" href="#action2">TV Shows</Nav.Link>
                  <Nav.Link className="text-light" href="#action2">Movies</Nav.Link>
                </div>
              </Nav>
            </div>

            <div className='text-center w-100'>
              <Navbar.Brand className="text-light" href="#">Navbar scroll</Navbar.Brand>
            </div>


            <div className='w-100 d-flex'>
              <div style={{marginLeft:"auto"}}>
              <Button
                variant="primary"
                className="justify-content-end btn bg-white text-danger fw-bold border-0"
              >
                SIGN IN
              </Button>
              </div>
            </div>
          </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;