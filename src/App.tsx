import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["New York", "San Francisco", "Chicago", "Tokyo"],
  //   heading = "Cities";

  // let handleListGroupSelectItem = (item: string) => {
  //   console.log(item);
  // };

  let handleButtonClick = () => {
    console.log("Button Clicked!");
    alertVisible ? setAlertVisibility(false) : setAlertVisibility(true);
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleListGroupSelectItem}
      /> */}
      {alertVisible && (
        <Alert handleButtonClick={handleButtonClick}>
          Hello World <p>This is paragraph</p>
          <h3>this is H3 title in Primary color alert class</h3>
        </Alert>
      )}
      <Button
        buttonColor="primary"
        buttonText="Primary Btn"
        onClick={handleButtonClick}
      ></Button>
    </div>
  );
}

export default App;
