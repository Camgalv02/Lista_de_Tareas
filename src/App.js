import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import React, { useState } from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #FB8B24;
`;

const Title = styled.h1`
color: #333;
margin-bottom: 20px;
`;

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task])
  };
  return (
    <AppContainer>
      <Title>Lista de Tareas</Title>
      <TaskList tasks={tasks} addTask={addTask} />
    </AppContainer>
  )
}

export default App;

