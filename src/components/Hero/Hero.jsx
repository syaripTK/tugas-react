import "./Hero.css";

export default function Hero({ source }) {
  return (
    <>
      <section className="content-wrapper">
        <div className="hero-left">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <h2>Sindang di Saung Batur</h2>
          <button className="hero-btn">Reserfasi Sekarang</button>
        </div>
        <div className="hero-right">
          <img src={source} alt="Hero-Image" />
        </div>
      </section>
    </>
  );
}
