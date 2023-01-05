import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="one">
        <div className="img1">
          <img src="./logo-stackoverflow.png"></img>
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">For teams</a>
          </li>
        </ul>
        <input
          type="search"
          placeholder="Search..."
          className="searchInput"></input>
        <button className="btn1">Log in</button>
        <button className="btn2">Sign up</button>
      </div>
    </header>
  );
}
