import "../style/body.css";
import LeftSide from "./subcomp/LeftSide";
import BodyMain from "./subcomp/BodyMain";
import RightSide from "./subcomp/RightSide";

export default function Body() {
  return (
    <main>
      <div class="main">
        <LeftSide />
        <BodyMain />
        <RightSide />
      </div>
    </main>
  );
}
