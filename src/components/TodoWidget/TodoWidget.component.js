import React from 'react'
import { connect } from 'react-redux'
import { TodoWidgetView } from './TodoWidget.view'
import { fetchToDoList, ToDoListCreator, VisibilityFilters } from '../../actions/todo.action'

class TodoWidget extends React.PureComponent {
    constructor(props){
        super(props);
        this.onEnterPress = this.onEnterPress.bind(this);
    }

    componentWillMount(){
        this.props.fetchToDoList(this.props.widgetId)
    }

    onEnterPress(e){
        if (e.key === 'Enter') {
            this.props.addToDo(this.props.widgetId, e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return(
            <TodoWidgetView onEnter={this.onEnterPress} {...this.props}/>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps),
    numberOfIncompletedTasks: getNumberOfIncompletedTasks(state.todos, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addToDo: (id, text) => dispatch(ToDoListCreator.addTodo(id, text)),
    fetchToDoList: id => dispatch(fetchToDoList(id)),
    setFilter: filter => dispatch(ToDoListCreator.setVisibilityFilter(ownProps.widgetId, filter)),
    toggleTodo: id => dispatch(ToDoListCreator.toggleTodo(ownProps.widgetId, id)),
    removeTodo: id => dispatch(ToDoListCreator.removeTodo(ownProps.widgetId, id))

})

const getVisibleTodos = (todos, ownProps) => {
    const todo = todos.find(t => t.widgetId === ownProps.widgetId);
    if(todo){
        const filter = todo.visibilityFilter;
        const tasks = todo.tasks;
        switch (filter) {
          case VisibilityFilters.SHOW_ALL:
            return tasks
          case VisibilityFilters.SHOW_COMPLETED:
            return tasks.filter(t => t.isCompleted)
          case VisibilityFilters.SHOW_ACTIVE:
            return tasks.filter(t => !t.isCompleted)
          default:
            throw new Error('Unknown filter: ' + filter)
        }
    }
    return todos;
}

const getNumberOfIncompletedTasks = (todos, ownProps) => {
    const todo = todos.find(t => t.widgetId === ownProps.widgetId);
    if(todo){
        return todo.tasks.filter(t => !t.isCompleted).length;
    }
    return 0;
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWidget)