import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;

`

const Task = ({task,index}) => {
    return (
        <Draggable draggableId={task.id} index={index}> 
       {(provided,snapshot) => (
           <Container
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           >
           {task.content}
      </Container>
       )}
       </Draggable>
    )
}

export default Task
