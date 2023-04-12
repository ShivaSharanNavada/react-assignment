import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { LoginForm } from "./pages/user/login";
import { Cart } from "./pages/cart/cart";
import {Checkout} from "./pages/checkout/checkout"
import {Whislist} from "./pages/whislist/whislist"
import { ShopContextProvider } from "./context/shop-context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./pages/user/register";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/whislist" element={<Whislist/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
