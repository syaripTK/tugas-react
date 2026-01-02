import "./Footer.css";

export const Footer = ({ brandName }) => {
  return (
    <footer className="footer">
      <p style={{ textAlign: "center", marginTop: "10vw" }}>
        &copy; 2026 {brandName}. Made with happiness
      </p>
    </footer>
  );
};
