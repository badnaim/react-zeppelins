import "../style/style.css";

export default function Header() {
  return (
    <header>
      <div class="one">
        <img src="./logo-stackoverflow.png"></img>
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
      </div>
    </header>
  );
}
