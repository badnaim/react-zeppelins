import "../style/body.css";
import Aside from "./subcomp/Aside";
import BodyMain from "./subcomp/BodyMain";

export default function Body() {
  return (
    <main>
      <div class="main">
        <Aside />
        <BodyMain />
      </div>
    </main>
  );
}
