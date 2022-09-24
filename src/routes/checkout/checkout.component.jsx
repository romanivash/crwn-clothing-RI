import { useContext, useEffect } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartCount, cartItems, setCartItems } = useContext(CartContext);

  const newCartItemQuantity = (cartItem) => {
    console.log(cartCount);
    return (cartItem.quantity = cartItem.quantity + 1);
  };

  useEffect(() => {
    console.log("worked");
  });

  return (
    <div>
      <div>Total amount: {cartCount}</div>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <img src={cartItem.imageUrl} />
              <span>{cartItem.name}</span>
              <button>{"<"}</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => newCartItemQuantity(cartItem)}>
                {">"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
