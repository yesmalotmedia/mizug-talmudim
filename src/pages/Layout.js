import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/elements/Modal";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Modal />
      <Footer />
    </>
  );
}
