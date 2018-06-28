import React from 'react';
import { InputGroup, Input, Table, Button } from 'reactstrap';
import { FaCircleO, FaCheckCircleO, FaClose } from 'react-icons/lib/fa';
import { VisibilityFilters } from '../../actions/todo.action';
import './todo.css';

export const TodoWidgetView = props => {
  return (
    <div className="d-block mx-auto box-view">
      <InputGroup className="todo__input">
        <Input
          onKeyPress={props.onEnter}
          className="input--custom"
          placeholder="What needs to be done?"
        />
      </InputGroup>
      <div className="todo__header">
        <span className="todo__remain">
          {props.numberOfIncompletedTasks} items left
        </span>
        <span className="todo__filter">
          <Button
            size="sm"
            onClick={props.setVisibilityFilter(VisibilityFilters.SHOW_ALL)}
          >
            All
          </Button>
          <Button
            size="sm"
            onClick={props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
          >
            Active
          </Button>
          <Button
            size="sm"
            onClick={props.setVisibilityFilter(
              VisibilityFilters.SHOW_COMPLETED
            )}
          >
            Completed
          </Button>
        </span>
      </div>
      <Table>
        <tbody>
          {props.todos.map(todo => (
            <tr key={todo.id}>
              <th onClick={props.updateTodo(todo.id)} className="task__toggle">
                {todo.isCompleted ? (
                  <FaCheckCircleO size={26} />
                ) : (
                  <FaCircleO size={26} />
                )}
              </th>
              <td className={todo.isCompleted ? 'task--completed' : ''}>
                {todo.task}
              </td>
              <td onClick={props.deleteTodo(todo.id)} className="task__remove">
                <FaClose size={24} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
