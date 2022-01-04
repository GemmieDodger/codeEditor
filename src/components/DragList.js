import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components'
import ListItem from './ListItem';
import List from './List';
import DraggableElement from './DraggableElement';

// This is the drag list I have working with drag drop between the two lists

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
      content: `<style>css</style>`,
      place: "Second",
    },
    {
      id: "6",
      prefix: 'html',
      content: `<script>js</script>`,
      place: "Second From Last",
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

function DragList() {
  const [elements, setElements] = React.useState(data);
  // const [e, setE] = React.useState(generateLists())
  useEffect(() => {
    setElements(data);
    // console.log(e);
    console.log(elements)
  }, []);

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

export default DragList;