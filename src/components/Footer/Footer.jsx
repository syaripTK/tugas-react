import "./Footer.css";

export const Footer = ({ brandName }) => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} {brandName}. Made with happiness
      </p>
    </footer>
  );
};
