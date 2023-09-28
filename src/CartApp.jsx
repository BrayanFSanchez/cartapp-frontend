import { useItemCart } from "./hooks/useItemCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handleAddProductCart, handlerDeleteProductCart } =
    useItemCart();
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h3>Cart App</h3>

        <CartRoutes
          cartItems={cartItems}
          handleAddProductCart={handleAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart}
        />
      </div>
    </>
  );
};
