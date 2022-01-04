import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from './ListItem';

// Dragging in one list

interface DataElement {
    id: string;
    code: string;
    place: String;
  }
  
  type List = DataElement[]

  interface DraggableLocation {
    droppableId: string;
    index: number;
}

const components = [
    {
      id: "1",
      code: "<html>",
      place: "1",
    },
    {
      id: "2",
      code: "</html>",
      place: "last",
    },
    {
      id: "3",
      code: "<body>",
      place: "2",
    },
    {
      id: "4",
      code: "</body>",
      place: "4last",
    },
    {
      id: "5",
      code: `<style>css</style>`,
      place: "2last",
    },
    {
      id: "6",
      code: `<script>js</script>`,
      place: "3last",
    },
  ];

interface Combine {
    draggableId: string;
    droppableId: string;
}

interface DragResult {
    reason: 'DROP' | 'CANCEL';
    destination?: DraggableLocation;
    source: DraggableLocation;
    combine?: Combine;
    mode: 'FLUID' | 'SNAP';
    draggableId: DraggableId;
}

export default function DragAndDropList() {
    const [items, setItems] = useState(components)

    function onDragEnd(result) {
      if (!result.destination) {
        return;
    }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>  
            <Droppable droppableId="droppable" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {components.map((item, index) => (  
                            <Draggable draggableId={item.id} index={index}>  
                                {(provided, snapshot) => (  
                                   <div  
                                     ref={provided.innerRef}  
                                     key={item.id}
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                    <ListItem item={item} />
                                   </div>  
                                )}  
                            </Draggable>  
                        ))}  
                    </div>  
                )}  
            </Droppable>  
        </DragDropContext>
    )
}