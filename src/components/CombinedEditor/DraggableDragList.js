import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components'
import ListItem from './ListItem';
import List from './List';
import DraggableElement from './DraggableElement';
import { isPropertySignature } from 'typescript';
import { FiCodesandbox } from "react-icons/fi";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// This is the drag list I have working with drag drop between the two lists



const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function DraggableDragList(props) {
  const lists = ['suggestions', 'html'];


const data = {
    suggestions: [
    {
      id: "2",
      prefix: 'html',
      content: "</html>",
      place: "Last",
    },
    {
      id: "3",
      prefix: 'html',
      content: "<body>",
      place: "Third",
    },
    {
      id: "4",
      prefix: 'html',
      content: "</body>",
      place: "Third From Last",
    },
    {
      id: "5",
      prefix: 'html',
      content: `<style></style>`,
      place: "Second",
    },
    {
      id: "6",
      prefix: 'html',
      content: `<script></script>`,
      place: "Second From Last",
    },
    {
      id: "7",
      prefix: 'html',
      content: `<p id="paragraph">Hello I am your favourite paragraph.</p>`,
      place: "Inside body",
    },
    {
      id: "8",
      prefix: 'html',
      content: `Add my own content`,
      place: "Inside body",
    },
    {
      id: "9",
      prefix: 'html',
      content: `<h1 id="header1">Shout if you love coding!</h1>`,
      place: "Inside body",
    },
  ],
  html: [
    {
      id: "1",
      prefix: 'html',
      content: "<html>",
      place: "First",
    },
  ],
}
  const [elements, setElements] = React.useState(data);
  useEffect(() => {
    setElements(data);
  }, []);

  const handleChange = (elements) => {
    var code = '';

    elements['html'].map((element) => {
      code = code.concat(" ", element.content)
    })
    console.log(code)
    props.onChange(code);

  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
    handleChange(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DraggableDragList;