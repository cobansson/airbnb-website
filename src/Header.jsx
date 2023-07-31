import airBnbLogo from "./images/nav-images/Vector.png";

function Navbar() {
  return (
    <nav>
      <img src={airBnbLogo} />
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Navbar />
      </div>
    </header>
  );
}
