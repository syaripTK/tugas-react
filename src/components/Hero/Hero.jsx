import "./Hero.css";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Hero({ source }) {
  return (
    <>
      <section className="content-wrapper">
        <div className="hero-left">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <h2>Sindang di Saung Batur</h2>
          <div className="btn-wrapper">
            <button className="hero-btn">Reservasi Sekarang</button>
            <button className="vid-btn">
              <i class="fa-solid fa-circle-play"> </i> Watch Video
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={source} alt="Hero-Image" />
        </div>
      </section>
    </>
  );
}
