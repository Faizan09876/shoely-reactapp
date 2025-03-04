import CartItem from "./CartItem";

function Cart({ cartItems, onClickTrash }) {
  return (
    <div>
      <h2 className=" dark:text-white text-4xl font-bold mb-10">Cart</h2>

      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
