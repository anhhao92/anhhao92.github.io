import React from 'react'
import { InputGroup, Input, Table, Button } from 'reactstrap'
import { FaCircleO, FaCheckCircleO, FaClose } from 'react-icons/lib/fa';
import { VisibilityFilters } from '../../actions/todo.action'

import "./todo.css"

export const TodoWidgetView = (props) => {
    console.log(props)
    return (
        <div>
            <InputGroup className="todo__input">
                <Input onKeyPress={props.onEnter} className="input--custom" placeholder="What needs to be done?" />
            </InputGroup>
            <div className="todo__header">
                <span className="todo__remain">{props.numberOfIncompletedTasks} items left</span>
                <span className="todo__filter">
                    <Button size="sm" onClick={props.setAll}>All</Button>
                    <Button size="sm" onClick={props.setActive}>Active</Button>
                    <Button size="sm" onClick={props.setCompleted}>Completed</Button>
                </span>
            </div>
            <Table>
                <tbody>
                    {   
                        props.todos.map(todo => (
                            <tr key={todo.id}>
                                <th onClick={() => props.toggleTodo(todo.id)} className="task__toggle">{todo.isCompleted ? <FaCheckCircleO size={26} /> : <FaCircleO size={26} /> }</th>
                                <td className={todo.isCompleted ? "task--completed" : ""}>{todo.task}</td>
                                <td onClick={() => props.removeTodo(todo.id)} className="task__remove"><FaClose size={24}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}