import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "Tokyo"],
    heading = "Cities";

  let handleListGroupSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleListGroupSelectItem}
      />
    </div>
  );
}

export default App;
