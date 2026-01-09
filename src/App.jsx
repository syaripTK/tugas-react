import { useEffect, useState } from "react";
import "./App.css"
import { Footer } from "./components/Footer/Footer";
import { fetchJson } from "./utils/fetchJSON.js";
import { Header } from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Brand from "./components/Sections/Brand.jsx";

function App() {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetchJson("/dataMakanan.json")
      .then((json) => setFood(json))
      .catch((err) => console.error(err));

    fetchJson("/dataMinuman.json")
      .then((json) => setDrink(json))
      .catch((err) => console.error(err));
  }, []);

  if (!food && !drink) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Hero source="/images/hero-image.png"/>
      <Brand />
      <h2 className="head-banner">Menu Makanan</h2>
      <div className="card-wrapper">
        {food.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            alt={item.nama}
            namaMenu={item.nama}
            price={item.harga}
          />
        ))}
      </div>

      <h2 className="head-banner">Menu Minuman</h2>
      <div className="card-wrapper">
        {drink.map((e) => (
          <Card src={e.image} alt={e.nama} namaMenu={e.nama} price={e.harga} />
        ))}
      </div>

      <Footer brandName={"Dokter Ngesot Inc"} />
    </>
  );
}

export default App;
