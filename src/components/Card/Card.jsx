import "./Card.css";

const Card = ({ key, src, alt, namaMenu, price }) => {
  return (
    <div key={key} className="card">
      <div className="card-head">
        <img src={src} alt={alt} className="card-image" />
      </div>
      <div className="card-body">
        <h3 className="menu">{namaMenu}</h3>
        <p className="price"><span className="dollar">Rp.</span>{price}</p>
        <div className="card-footer">
          <button className="btn-menu">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
