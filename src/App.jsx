import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { fetchJson } from "./utils/fetchJSON.js";
import { Header } from "./components/Header/Header.jsx";

function App() {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h2 style={{ textAlign: "center", marginTop: "50px"}}>Menu Makanan</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {food.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
              justifyContent: "space-around",
            }}
          >
            <img
              src={item.image}
              alt={item.nama}
              style={{ width: "10vw", marginRight: "10px", borderRadius: "10px" }}
            />
            <div>
              <h3 style={{ margin: "0" }}>{item.nama}</h3>
              <p>Rp{item.harga}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: "center" }}>Menu Minuman</h2>
      <ul style={{ listStyle: "none", padding: "0,0,0,10px" }}>
        {drink.map((e) => (
          <li key={e.id} style={{ display: "flex" }}>
            <img src={e.image} alt={e.nama} style={{ width: "10vw", marginBottom: "10px", borderRadius: "10px" }} />
            <div style={{marginLeft:"10px"}}>
              <h3 style={{ margin: "0" }}>{e.nama}</h3> – Rp{e.harga}
            </div>
          </li>
        ))}
      </ul>

      <Footer brandName={"Dokter Ngesot Inc"} />
    </>
  );
}

export default App;
