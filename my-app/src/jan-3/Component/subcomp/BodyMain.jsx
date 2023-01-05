import "../../style/bodyMain.css";
import SingleResult from "./jsx/SingleResult";
import RightSide from "./RightSide";

const results = [
  {
    title: "component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 2000,
    answers: 32,
  },
  {
    title: "force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 100,
    answers: 2,
  },
  {
    title: "rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 20,
    answers: 3,
  },
];

export default function Middle() {
  return (

    <div className="mainInf">
      <div className="question"></div>
      <div className="flex">
      <div className="arrows"></div>
        <div className="firstPart">
          <div>
          <SingleResult
            title={results[0].title}
            description={results[0].description}
            asd={results[0].vote}
          />
          </div>
          <div>
            <SingleResult
              title={results[1].title}
              description={results[1].description}
              asd={results[1].vote}
            />
          </div>
          <div>
            <SingleResult
              title={results[2].title}
              description={results[2].description}
              asd={results[2].vote}
            />
          </div>
        </div>
      
        <div className="secondPart">
          <RightSide />
        </div>
      </div>
      
    </div>
  );
}
