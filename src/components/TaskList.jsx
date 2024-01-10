// TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import styled from "styled-components";

const TaskListContainer =styled.div`
width: 300px;
text-align: center;
`;

const TaskInputContainer = styled.div`
margin-top: 30px;
`;

const TaskInput = styled.input`
padding: 15px ;
margin-left: 30px;
margin-bottom: 10px;
`;

const AddButton= styled.button`
padding: 5px 10px;
background-color: #9A031E;
color: white;
border: none;
cursor: pointer;
margin-left: 20px;
`;


function TaskList({ tasks, addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <TaskListContainer>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task}/>
        ))}
      </ul>
      <TaskInputContainer>
        <TaskInput
          type="text" placeholder='Añada una nueva tarea...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <AddButton onClick={handleAddTask}>Agregar Tarea</AddButton>
      </TaskInputContainer>
    </TaskListContainer>
  );
}

export default TaskList;
