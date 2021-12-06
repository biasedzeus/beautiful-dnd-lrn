import React,{useState} from 'react';
import initialData from "./initial-data"
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";
import Column from "./Components/Column";


const App = () => {
  const [state, setState] = useState(initialData);



    return (
     <div>
         {state.columnOrder.map((columnId) =>{
            const column =state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
            console.log("TASKSZ::",tasks)

            return (<Column key ={columnId} column={column} tasks={tasks}/>);
         })}
             


     </div>
    )
}

export default App;
