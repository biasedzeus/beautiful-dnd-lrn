import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgray;
border-radius: 0.3em;
text-align: center;

`
const Title = styled.h3`
padding: 8px;`
const TaskList = styled.div`
padding: 8px;
`


const Column = ({column,tasks}) => {
    return (
        <Container>
            <Title>{column.title}</Title>
            {console.log("Column Comp::",tasks)}
            <TaskList>
                {tasks.map(task => {return(<Task key = {task.id} task={task}/>)
                })}
            </TaskList>


        </Container>
    )
}

export default Column
 