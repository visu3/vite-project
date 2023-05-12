import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "Tokyo"],
    heading = "Cities";

  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
