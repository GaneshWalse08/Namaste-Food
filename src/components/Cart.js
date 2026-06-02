import ItemsListAccordian from "./ItemsListAccordian";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m -4 p-4">
      <div >
        <h1 className="font-bold text-2xl  mb-2.5">Cart</h1>
      {(cartItems.length != 0) && <button className="border p-1.5 rounded-lg bg-black text-white cursor-pointer" onClick={() => {handleClearCart()}}>Clear Cart</button>}

      {(cartItems.length === 0) && <h3 className="p-2.5">Your Cart is Empty!!</h3>}
      </div>

      <div className="w-9/12 m-auto">
        <ItemsListAccordian listItems={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;