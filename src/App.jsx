import { Routes, Route } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useScreenWidth } from "./hooks/useScreenWidth";

import "./App.css";
import Footer from "./componetns/Footer";
import Header from "./componetns/Header";
import PreFooter from "./componetns/PreFooter";
import LeftSideBar from "./componetns/LeftSideBar";
import GoodsCard from "./pages/GoodsCard";

import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import RightSideBar from "./componetns/RightSideBar";
import Cart from "./componetns/Cart";

import "./scss/style.scss";
import FooterMobile from "./componetns/FooterMobile";

function App() {
  const windowSize = useScreenWidth();

  return (
    <>
      <div className="wrapper">
        <div className="shop">
          <div className="shop__container">
            <LeftSideBar />
            <div className="shop-center">
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/goods" element={<Goods />} />
                <Route path="/card" element={<GoodsCard />} />
                <Route path="/order" element={<Order />} />
                {windowSize.width < 991.98 && (
                  <Route path="/cart" element={<Cart />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
