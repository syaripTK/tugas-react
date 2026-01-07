import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { fetchJson } from "./utils/fetchJSON.js";
import { Header } from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";

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
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Menu Makanan</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
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

      <h2 style={{ textAlign: "center" }}>Menu Minuman</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {drink.map((e) => (
          <Card src={e.image} alt={e.nama} namaMenu={e.nama} price={e.harga} />
        ))}
      </div>

      <Footer brandName={"Dokter Ngesot Inc"} />
    </>
  );
}

export default App;
