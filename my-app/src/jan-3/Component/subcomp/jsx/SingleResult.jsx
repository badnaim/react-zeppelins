export default function SingleResult(props) {
  console.log("income: ", props.title);
  //   return <>test</>;
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.asd}</p>
    </div>
  );
}
