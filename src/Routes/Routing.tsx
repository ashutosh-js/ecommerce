import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';
import Home from '../Pages/Home/Home';
import CartItem from '../Pages/cart/CartItem';
import Productlist from '../components/Productcard/Productlist';

const Routing: React.FC = () => {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/productlist" element={<Productlist/>} />
        </Routes>
      </Router>
    );
  };
  
  export default Routing;