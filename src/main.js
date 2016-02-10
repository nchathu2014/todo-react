import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';

var LIST = ["Nuwan with ReactJS"]

ReactDOM.render(
	<ToDoList toDoList={LIST}/>,
	document.getElementById('container')
);




