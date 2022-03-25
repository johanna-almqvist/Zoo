import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Header />
        </nav>
      </header>
      <main
        style={{
          backgroundImage: `url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)`,
        }}
      >
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
