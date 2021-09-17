import "./styles.css";

const Product = ({ handleClick, item }) => {
  return (
    <div className="box-item">
      <h3 className="box-item__name">{item.name}</h3>
      <figure className="box-item__image-box">
        <img className="box-item__image" src={item.img} alt={item.name} />
      </figure>
      <p className="box-item__category">{item.category}</p>
      <p className="box-item__price">${item.price}</p>
      <button className="box-item__button" onClick={() => handleClick(item)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
