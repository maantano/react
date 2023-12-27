import React, { useContext } from "react";
import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";
import inputClasses from "./Input.module.css";
import { TextField } from "@mui/material";
import useAdd from "../../hooks/use-add";
// import CartContext from "../../store/cart-context";
// import CartItem from "./CartItem";
const Add = (props) => {
  //   const cartCtx = useContext(CartContext);

  //   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  //   const hasItems = cartCtx.items.length > 0;

  //   const cartItemRemoveHandler = (id) => {
  //     cartCtx.removeItem(id);
  //   };
  //   const cartItemAddHandler = (item) => {
  //     cartCtx.addItem({ ...item, amount: 1 });
  //   };

  //   const cartItems = (
  //     <ul className={classes["cart-items"]}>
  //       {cartCtx.items.map((item) => (
  //         <CartItem
  //           key={item.id}
  //           name={item.name}
  //           amount={item.amount}
  //           price={item.price}
  //           onRemove={cartItemRemoveHandler.bind(null, item.id)}
  //           onAdd={cartItemAddHandler.bind(null, item)}
  //         />
  //       ))}
  //     </ul>
  //   );
  const {
    value: menuName,
    isValid: menuNameValid,
    hasError: menuNameError,
    valueChageHandler,
    inputBlurHandler,
    reset: menuNameReset,
  } = useAdd(() => true);
  const onSubmtHandler = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    menuNameReset();
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={onSubmtHandler}>
        <div className={classes.total}>
          <span>Add Menu</span>
        </div>
        <div className="flex flex-col">
          <div className="mb-3">
            <TextField
              onChange={valueChageHandler}
              value={menuName}
              onBlur={inputBlurHandler}
              fullWidth
              label="Menu name"
              id="Menu name"
            />
          </div>
          <div className="mb-3">
            <TextField
              fullWidth
              label="Menu Description"
              id="Menu Description"
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Add</button>
        </div>
      </form>
    </Modal>
  );
};

export default Add;
