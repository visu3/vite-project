import ListGroup from "./Components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "Tokyo"],
    heading = "Cities";

  let handleListGroupSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleListGroupSelectItem}
      /> */}
      <Alert>
        Hello World <p>This is paragraph</p>
        <h3>this is H3 title in Primary color alert class</h3>
      </Alert>
    </div>
  );
}

export default App;
