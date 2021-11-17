import { Navbar, Container, Nav } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <Container className="justify-content-center">
        <Nav>
          <Navbar.Text>
            Monia Favaro{" "}
            <a target="_blank" href="https://github.com/moniafavaro">
              <GitHubIcon />
            </a>{" "}
            <a target="_blank" href="https://www.linkedin.com/in/moniafavaro/">
              <LinkedInIcon />
            </a>
          </Navbar.Text>
        </Nav>
        <Nav className='mx-5'>
          <Navbar.Text>
            Preston Ng{" "}
            <a target="_blank" href="https://github.com/sungchun">
              <GitHubIcon />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/preston-ng-905959147/"
            >
              <LinkedInIcon />
            </a>
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            Reisli Hysa{" "}
            <a target="_blank" href="https://github.com/ReiHysa">
              <GitHubIcon />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/reisli-hysa-a3b5961ab/"
            >
              <LinkedInIcon />
            </a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
