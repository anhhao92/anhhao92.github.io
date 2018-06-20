export const todos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODO': 
            return [
                ...state,
                {
                    visibilityFilter: 'SHOW_ALL',
                    widgetId: action.payload.widgetId,
                    tasks: action.payload.tasks
                }
            ]
        case 'ADD_TODO':
            return state.map(todo => {
                if(todo.widgetId === action.widgetId){
                    todo.tasks = [
                        ...todo.tasks,
                        {
                            id: action.id,
                            task: action.task,
                            isCompleted: false,
                            userId: 1
                        }]
                }
                return todo;
            })
        case 'TOGGLE_TODO':
            const currentTodo = state.find(m => m.widgetId === action.widgetId);
            const tasks = currentTodo.tasks.map(task => task.id === action.id 
                                    ? { ...task, isCompleted: !task.isCompleted } 
                                    : task);
            return state.map(todo =>
                todo.widgetId === action.widgetId
                ? {...todo, tasks}
                : todo);
        case 'REMOVE_TODO':
            const todoWidget = state.find(m => m.widgetId === action.widgetId);
            const todoList = todoWidget.tasks.filter(task => task.id !== action.id);
            return state.map(todo =>
                todo.widgetId === action.widgetId
                ? {...todo, tasks: todoList}
                : todo);         
        case 'SET_VISIBILITY_FILTER':
            return state.map(todo => 
                todo.widgetId === action.widgetId
                ? {...todo, visibilityFilter: action.filter} 
                : todo)
        default:
            return state
    }
}