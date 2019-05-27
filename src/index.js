import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

const DOC_ID = "1iYDEq-gjyXT5get3Cc1A-3kWQ67sYFL4fJ73X2hNlb4";
const FOLDER_ID = "0B9Uo4HiNk66aOTFBTEJCaVc3bjA";
const DOC_TITLE = "New Post";
const openString = `https://docs.google.com/document/d/${DOC_ID}/copy?id=${DOC_ID}&copyCollaborators=false&copyComments=false&title=${DOC_TITLE}&copyDestination=${FOLDER_ID}`;

const onClick = () => {
  window.open(openString, "document");
};
function App() {
  return (
    <div>
      {openString}
      <br />
      <Button variant="contained" color="primary" onClick={onClick}>
        Hello World
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
