import "../styles/main.css";
import Data from "../util/Data"

export default function main() {
  return (
    <main>
      <div className="full">
        <ul>
          <li>All</li>
          <li>UI Design</li>
          <li>UX Design</li>
          <li>Product Design</li>
          <li>Articles</li>
          <li>Tutorials</li>
          <li>News</li>
        </ul>
      </div>
      <div className="full1">
        <Data />
      </div>
    </main>
  );
}
