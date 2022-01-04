import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import CombinedCodeEditor from "./components/CombinedEditor/CombinedEditor";
import DragAndDropList from "./components/SingleList/DragAndDropList";
import DragList from "./components/DoubleList/DragList";
// import { FiCodesandbox } from "react-icons/fi";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/


function App() {
  
  return (
    <>
  {/* <DragAndDropList /> */}
  {/* <DragList />
   */}
  <CombinedCodeEditor />
  {/* <CodeEditor /> */}
    </>
  );
}

export default App;
