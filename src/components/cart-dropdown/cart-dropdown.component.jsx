import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import ProductCard from "../product-card/product-card.component";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
