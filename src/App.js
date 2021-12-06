import React,{useState} from 'react';
import initialData from "./initial-data"
import {DragDropContext,} from "react-beautiful-dnd";
import Column from "./Components/Column";


const App = () => {
  const [state, setState] = useState(initialData);

  function handleDragEnd(result){
    const { destination, source, draggableId } = result;

   
    if(!destination) return;
    if(destination.draggableId === source.draggableId && destination.index === source.index) return;

    const column = state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index,1)
    newTaskIds.splice(destination.index,0,draggableId);
    
   console.log("Column ==>",column)
   console.log("Column.taskids ==>",column.taskIds)

   console.log("newTaskIds ==>",newTaskIds)





    const newColumn = {
        ...column,
        taskIds:newTaskIds
    }

    const newState = {
        ...state,
        columns:{
            ...state.columns,
            [newColumn.id]:newColumn,
        }
    }

    setState(newState)




  }



    return (
    
         <DragDropContext onDragEnd={handleDragEnd}>
         {state.columnOrder.map((columnId) =>{
            const column =state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
            console.log("TASKSZ::",tasks)

            return (<Column key ={columnId} column={column} tasks={tasks}/>);
         })}
         </DragDropContext>
             


     
    )
}

export default App;
