import React, {useState} from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from './ListItem';

const data = {
    suggestions: [
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
  ],
  code: [],
}

export default function List() {  
    const [elements, setElements] = useState(data);
    const removeFromList = (list, index) => {  
        const result = Array.from(list);  
        const [removed] = result.splice(index, 1);  
        return [removed, result]  
    }  
    
    const addToList = (list, index, element) => {  
        const result = Array.from(list);  
        result.splice(index, 0, element);  
        return result  
    }
    
    const onDragEnd = (result) => {  
        if (!result.destination) {  
            return;  
        }  
        const listCopy = { ...elements }  
    
        const sourceList = listCopy[result.source.droppableId]  
        const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index)  
        listCopy[result.source.droppableId] = newSourceList  
    
        const destinationList = listCopy[result.destination.droppableId]  
        listCopy[result.destination.droppableId] = addToList(destinationList, result.destination.index, removedElement)  
    
        setElements(listCopy)  
    }
    
    const DraggableElement = ({ prefix, elements }) => (  
        <Droppable droppableId={`${prefix}`}>  
            {(provided) => (  
                <div  
                    {...provided.droppableProps}  
                    ref={provided.innerRef}  
                >  
                    {elements.map((item, index) => (  
                            <ListItem key={item.id} item={item} index={index}/>  
                    ))}  
                    {provided.placeholder}
                </div>  
            )}  
        </Droppable>  
    );  
    return (
        <DragDropContext onDragEnd={onDragEnd}>  
            <Droppable droppableId="droppable" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {elements.map((item, index) => (  
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