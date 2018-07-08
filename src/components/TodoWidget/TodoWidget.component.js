import React from 'react';
import { connect } from 'react-redux';
import { TodoWidgetView } from './TodoWidget.view';
import { fetchToDoList, ToDoListCreator } from '../../actions/todo.action';
import {
  getVisibilityFilter,
  getVisibleTodos,
  getTotalInCompletedTasks
} from '../../selectors/todo.selectors';

class TodoWidget extends React.PureComponent {
  componentWillMount() {
    const { fetchToDoList, widgetId } = this.props;
    fetchToDoList(widgetId);
  }

  onEnterPress = e => {
    if (e.key === 'Enter') {
      this.props.addToDo(this.props.widgetId, e.target.value);
      e.target.value = '';
    }
  };

  setVisibilityFilter = filter => e => {
    this.props.setFilter(filter);
  };

  updateTodo = id => e => {
    this.props.toggleTodo(id);
  };

  deleteTodo = id => e => {
    this.props.removeTodo(id);
  };

  render() {
    return (
      <TodoWidgetView
        onEnter={this.onEnterPress}
        setVisibilityFilter={this.setVisibilityFilter}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = () => {
  const getVisibleTodoLists = getVisibleTodos();
  const numberOfIncompleted = getTotalInCompletedTasks();
  return (state, props) => ({
    todos: getVisibleTodoLists(state.todos, props),
    numberOfIncompletedTasks: numberOfIncompleted(state.todos, props),
    filter: getVisibilityFilter(state.todos, props)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo: (id, text) => dispatch(ToDoListCreator.addTodo(id, text)),
  fetchToDoList: id => dispatch(fetchToDoList(id)),
  setFilter: filter =>
    dispatch(ToDoListCreator.setVisibilityFilter(ownProps.widgetId, filter)),
  toggleTodo: id => dispatch(ToDoListCreator.toggleTodo(ownProps.widgetId, id)),
  removeTodo: id => dispatch(ToDoListCreator.removeTodo(ownProps.widgetId, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoWidget);
