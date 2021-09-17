import Product from "../Product";
import "./styles.css";

const MenuContainer = ({ products, handleClick, filtered }) => {
  return (
    <>
      {filtered.length < 1 ? (
        <ul className="list-products">
          {products.map((elm) => {
            return (
              <li key={elm.id} className="list-products__item">
                <Product handleClick={handleClick} item={elm} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-products">
          {filtered &&
            filtered.map((elm) => {
              return (
                <li key={elm.id} className="list-products__item">
                  <Product handleClick={handleClick} item={elm} />
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default MenuContainer;
