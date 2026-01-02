import "./Footer.css";

export const Footer = ({ brandName }) => {
  return (
    <footer className="footer">
      <p style={{ textAlign: "center", marginTop: "10vw" }}>
        &copy; {new Date().getFullYear()} {brandName}. Made with happiness
      </p>
    </footer>
  );
};
