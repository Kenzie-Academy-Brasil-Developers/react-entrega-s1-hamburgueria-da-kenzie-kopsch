import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
import pic1 from "./assets/img/pic1.jpg";
import pic2 from "./assets/img/pic2.jpg";
import pic3 from "./assets/img/pic3.jpeg";
import pic4 from "./assets/img/pic4.jpg";
import pic5 from "./assets/img/pic5.jpeg";
import pic6 from "./assets/img/pic6.jpg";
import pic7 from "./assets/img/pic7.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      img: pic4,
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      img: pic1,
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      img: pic2,
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      img: pic3,
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      img: pic6,
    },
    {
      id: 6,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: pic5,
    },
    {
      id: 7,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: pic7,
    },
  ];

  const [filtered, setFiltered] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (productValue) => {
    const filteredItem = products.filter(
      (elm) => elm.name.toLowerCase() === productValue.toLowerCase()
    );
    setFiltered(filteredItem);
  };

  const handleClick = (item) => {
    console.log(item);
    const foundInProduct = products.find((elm) => elm.id === item.id);
    const productPrice = currentSale.find((elm) => elm.id === item.id);

    if (foundInProduct && !productPrice) {
      setCurrentSale([...currentSale, foundInProduct]);
      setCartTotal(cartTotal + foundInProduct.price);
    }
  };

  return (
    <>
      <div className="App-header">
        <h3 className="header-title">Hamburgueria 8-BIT</h3>
        <SearchBar showProducts={showProducts} />
      </div>
      <div className="App">
        <MenuContainer
          products={products}
          handleClick={handleClick}
          filtered={filtered}
        />
      </div>
      <div className="App-cart">
        <Cart cartTotal={cartTotal} currentSale={currentSale} />
      </div>
    </>
  );
}

export default App;
