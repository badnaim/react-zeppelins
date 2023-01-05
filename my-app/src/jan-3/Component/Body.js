import "../style/body.css";
import LeftSide from "./subcomp/LeftSide";
import BodyMain from "./subcomp/BodyMain";

export default function Body() {
  return (
    <main>
      <div class="main">
        <LeftSide />
        <BodyMain />
      </div>
    </main>
  );
}
