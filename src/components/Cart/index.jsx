import "./styles.css";

const Cart = ({ cartTotal, currentSale }) => {
  return (
    <div className="cart-box">
      <h3 className="cart-box__description">Products in cart:</h3>
      {currentSale.map((elm) => (
        <div className="cart-box__item">
          <img className="cart-box__item-image" src={elm.img} alt={elm.name} />
          <p className="cart-box__item-name" key={elm.id}>
            {elm.name}
          </p>
        </div>
      ))}
      <p className="cart-box__price">${cartTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
