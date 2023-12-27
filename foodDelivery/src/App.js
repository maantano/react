import { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import useModal from "./hooks/use-modal";
import Add from "./components/Add/Add";

function App() {
  // const [cartShown, setCartShown] = useState(false);

  // const showCartHandler = () => {
  //   console.log("1234123");
  //   setCartShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartShown(false);
  // };
  const {
    show: cartShown,
    modalShow: cartShow,
    modalHide: cartHide,
  } = useModal();

  const { show: addShown, modalShow: addShow, modalHide: addHide } = useModal();

  return (
    <CartProvider>
      {cartShown && <Cart onClose={cartHide} />}
      {addShown && <Add onClose={addHide} />}
      <Header onShowAdd={addShow} onShowCart={cartShow} />
      {/* {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} /> */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
