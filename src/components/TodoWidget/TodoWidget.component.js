import React from 'react'
import { connect } from 'react-redux'
import { TodoWidgetView } from './TodoWidget.view'
import { fetchToDoList, ToDoListCreator, VisibilityFilters } from '../../actions/todo.action'
import { getVisibilityFilter, getVisibleTodos, getTotalInCompletedTasks } from '../../selectors/todoSelectors'


class TodoWidget extends React.PureComponent {
    componentWillMount(){
        const {fetchToDoList, widgetId} = this.props;
        fetchToDoList(widgetId)
    }

    onEnterPress = (e) => {
        if (e.key === 'Enter') {
            this.props.addToDo(this.props.widgetId, e.target.value);
            e.target.value = '';
        }
    }

    setAll = () => {
        const {dispatch, widgetId} = this.props;
        console.log(this)
        this.props.setFilter(VisibilityFilters.SHOW_ALL);
    }

    setActive = () => {
        const {dispatch, widgetId} = this.props;
        this.props.setFilter(VisibilityFilters.SHOW_ACTIVE);
    }

    setCompleted = () => {
        const {dispatch, widgetId} = this.props;
        this.props.setFilter(VisibilityFilters.SHOW_COMPLETED);
    }

    render() {
        return(
            <TodoWidgetView 
                onEnter={this.onEnterPress} 
                setAll={this.setAll} 
                setActive={this.setActive} 
                setCompleted={this.setCompleted} 
                {...this.props}
            />
        )
    }
}

const mapStateToProps = () => {
    const getVisibleTodoLists = getVisibleTodos()
    const numberOfIncompleted = getTotalInCompletedTasks()
    return (state, props) => ({
        todos: getVisibleTodoLists(state.todos, props),
        numberOfIncompletedTasks: numberOfIncompleted(state.todos, props),
        filter: getVisibilityFilter(state.todos, props)
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addToDo: (id, text) => dispatch(ToDoListCreator.addTodo(id, text)),
    fetchToDoList: id => dispatch(fetchToDoList(id)),
    setFilter: filter => dispatch(ToDoListCreator.setVisibilityFilter(ownProps.widgetId, filter)),
    toggleTodo: id => dispatch(ToDoListCreator.toggleTodo(ownProps.widgetId, id)),
    removeTodo: id => dispatch(ToDoListCreator.removeTodo(ownProps.widgetId, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoWidget)