import React, { useEffect, useState } from "react";
// import Editor from "./components/editor";
import DragAndDropList from "./components/DragAndDropList";
import DragList from "./components/DragList";
// import { FiCodesandbox } from "react-icons/fi";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/


function App() {
  const components = [
    {
      id: 1,
      code: "<html>",
      place: "1",
    },
    {
      id: 2,
      code: "</html>",
      place: "last",
    },
    {
      id: 3,
      code: "<body>",
      place: "2",
    },
    {
      id: 4,
      code: "</body>",
      place: "4last",
    },
    {
      id: 5,
      code: `<style>{css}</style>`,
      place: "2last",
    },
    {
      id: 6,
      code: `<script>{js}</script>`,
      place: "3last",
    },
  ];

  return (
    <>
  {/* <DragAndDropList /> */}
  <DragList />
    </>
  );
}

export default App;
