import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isChkout, setIsChkout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = (e) => {
    e.preventDefault();
    setIsChkout(true);
  };

  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://customhook-d4e12-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
    // const response = await fetch(
    //   "https://customhook-d4e12-default-rtdb.firebaseio.com/order.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
    //   }
    // );
    // response 변수에 담아서 에러 처리나 이런것들이 가능하다.
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Cloose
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChkout && (
        <Checkout onConfirm={submitHandler} onCancle={props.onClose} />
      )}
      {!isChkout && modalAction}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data../</p>;
  const didSubmittingModalConetnt = (
    <>
      <p>Successfully send the order!</p>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.button}>
          Cloose
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmittingModalConetnt}
      {/* {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChkout && (
        <Checkout onConfirm={submitHandler} onCancle={props.onClose} />
      )}
      {!isChkout && modalAction} */}
    </Modal>
  );
};

export default Cart;
