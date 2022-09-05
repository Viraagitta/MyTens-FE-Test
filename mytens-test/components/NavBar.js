import Container from "react-bootstrap/Container";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const src =
    "https://www.shareicon.net/data/2048x2048/2016/06/20/606964_github_4096x4096.png" ||
    "";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg
      variant="dark"
      className="bg-nav"
      style={{ paddingLeft: "30px" }}
    >
      <Navbar.Brand href="">
        {src ? (
          <Image
            priority
            loader={() => src}
            src={src}
            width={60}
            height={60}
            unoptimized={true}
            alt="Logo"
          />
        ) : null}
      </Navbar.Brand>
      <Container>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavBar;
