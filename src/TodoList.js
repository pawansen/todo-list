// src/TodoList.js
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('todos'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0)
            localStorage.setItem('todos', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input.trim() === '') return;
        setTasks([...tasks, { id: Date.now(), text: input, status: 'pending' }]);
        setInput('');
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: "completed" } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filterTasks = (filter) => {
        if (filter == 'all') {
            return tasks;
        } else {
            if (!filter) {
                return tasks;
            } else {
                var filteredArray = tasks.filter(function (itm) {
                    return itm.status == filter;
                });
                return filteredArray;
            }

        }
    };

    const [filter, setFilter] = useState('all');

    const filteredTasks = filterTasks(filter);

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
            </div>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(task => (

                        <tr key={task.id}>
                            <td>  {task.text}</td>
                            <td> <span className='status'>{task.status}</span></td>
                            <td> <button onClick={() => toggleTaskCompletion(task.id)} className='btn-pending'>Mark Completed</button>
                                <button onClick={() => deleteTask(task.id)} className='btn-success'>Delete</button></td>
                        </tr>

                    ))}

                </tbody>
            </Table>

        </div>
    );
};

export default TodoList;
