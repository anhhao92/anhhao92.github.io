export const todos = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TODO': 
            return {
                ...state,
                [action.payload.widgetId] :  {
                    visibilityFilter: 'SHOW_ALL',
                    tasks: action.payload.tasks
                }
            }
        case 'ADD_TODO':
            return {
                ...state,
                [action.widgetId]: addTodo(state[action.widgetId], action)
            }
        case 'TOGGLE_TODO':
            const currentTodo = state[action.widgetId];
            const tasks = currentTodo.tasks.map(task => task.id === action.id 
                                    ? { ...task, isCompleted: !task.isCompleted } 
                                    : task);
            return {
                ...state,
                [action.widgetId]: {
                    ...currentTodo,
                    tasks
                }
            }
        case 'REMOVE_TODO':
            const todoWidget = state[action.widgetId];
            const todoList = todoWidget.tasks.filter(task => task.id !== action.id);
            return {
                ...state,
                [action.widgetId]: {
                    ...currentTodo,
                    tasks: todoList
                }
            }        
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                [action.widgetId]: {
                    ...state[action.widgetId],
                    visibilityFilter: action.filter
                }
            }
        default:
            return state
    }
}

const addTodo = (todo, action) => {
    const previousTasks = todo ? todo.tasks : {};
    return {
        ...todo,
        tasks: [
            ...previousTasks,
            {
                id: action.id,
                task: action.task,
                isCompleted: false,
                userId: 1
            }
        ]
    }
}
