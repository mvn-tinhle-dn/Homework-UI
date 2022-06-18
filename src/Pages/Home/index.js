import { Route, Routes } from "react-router-dom";
import Accordion from "../../modules/Accordion";
import Alerts from "../../modules/Alerts";
import Badge from "../../modules/Badge";
import Breadcrumb from "../../modules/Breadcrumb";
import ButtonGroup from "../../modules/ButtonGroup";
import Buttons from "../../modules/Buttons";
import Card from "../../modules/Card";
import Close from "../../modules/Close";
import Collapse from "../../modules/Collapse";
import Dropdowns from "../../modules/Dropdowns";
import List from "../../modules/List";
import Modal from "../../modules/Modal";
import Navbar from "../../modules/Navbar";
import Navs from "../../modules/Navs";
import Offcanvas from "../../modules/Offcanvas";
import Pagination from "../../modules/Pagination";
import Placeholders from "../../modules/Placeholders";
import Popovers from "../../modules/Popovers";
import Progress from "../../modules/Progress";
import Scrollspy from "../../modules/Scrollspy";
import Spinners from "../../modules/Spinners";
import Toasts from "../../modules/Toasts";
import Tooltips from "../../modules/Tooltips";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<Accordion />}></Route>
      <Route path="/Alerts" element={<Alerts />}></Route>
      <Route path="/Badge" element={<Badge />}></Route>
      <Route path="/Breadcrumb" element={<Breadcrumb />}></Route>
      <Route path="/ButtonGroup" element={<ButtonGroup />}></Route>
      <Route path="/Buttons" element={<Buttons />}></Route>
      <Route path="/Card" element={<Card />}></Route>
      <Route path="/Close" element={<Close />}></Route>
      <Route path="/Collapse" element={<Collapse />}></Route>
      <Route path="/Dropdowns" element={<Dropdowns />}></Route>
      <Route path="/List" element={<List />}></Route>
      <Route path="/Modal" element={<Modal />}></Route>
      <Route path="/Navbar" element={<Navbar />}></Route>
      <Route path="/Navs" element={<Navs />}></Route>
      <Route path="/Offcanvas" element={<Offcanvas />}></Route>
      <Route path="/Pagination" element={<Pagination />}></Route>
      <Route path="/Placeholders" element={<Placeholders />}></Route>
      <Route path="/Popovers" element={<Popovers />}></Route>
      <Route path="/Progress" element={<Progress />}></Route>
      <Route path="/Scrollspy" element={<Scrollspy />}></Route>
      <Route path="/Spinners" element={<Spinners />}></Route>
      <Route path="/Toasts" element={<Toasts />}></Route>
      <Route path="/Tooltips" element={<Tooltips />}></Route>
    </Routes>
  );
}

export default Home;
