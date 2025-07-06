import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      🛒 Cart: {totalItems} items
    </nav>
  );
};

export default Navbar;
