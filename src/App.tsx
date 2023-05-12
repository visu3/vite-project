import ListGroup from "./Components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "Tokyo"],
    heading = "Cities";

  let handleListGroupSelectItem = (item: string) => {
    console.log(item);
  };

  let handleButtonClick = () => {
    console.log("Button Clicked!");
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleListGroupSelectItem}
      /> */}
      {/* <Alert>
        Hello World <p>This is paragraph</p>
        <h3>this is H3 title in Primary color alert class</h3>
      </Alert> */}
      <Button
        buttonColor="primary"
        buttonText="Primary Btn"
        onClick={handleButtonClick}
      ></Button>
    </div>
  );
}

export default App;
