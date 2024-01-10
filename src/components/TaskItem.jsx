//TaskItem.js  o TaskItem.jsx
import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
list-style-type: none; /*es el equivalente a text-decoration:none en css*/
padding:10px;
margin:10px 0;
background-color: #E36414;
border-radius: 5px;
`;

function TaskItem({ task }) {
    return <ListItem>{task}</ListItem>;
}

export default TaskItem;