export const Header = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 2px 10px rgba(42, 71, 97, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          height: "5vw",
          alignItems: "center",
          borderRadius: "99px",
        }}
      >
        <a
          href="#"
          style={{ textDecoration: "none", color: "white", fontSize: "2em" }}
        >
          Navbar
        </a>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Home
            </a>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              About
            </a>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
