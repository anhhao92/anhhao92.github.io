import { tasksRef } from '../configs/firebase';

let nextTodoId = 25;
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ToDoListCreator = {
  fetchTodo: todo => ({
    type: 'FETCH_TODO',
    payload: todo
  }),
  addTodo: (widgetId, task) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    task,
    widgetId
  }),
  toggleTodo: (widgetId, id) => ({
    type: 'TOGGLE_TODO',
    id,
    widgetId
  }),
  removeTodo: (widgetId, id) => ({
    type: 'REMOVE_TODO',
    id,
    widgetId
  }),
  setVisibilityFilter: (widgetId, filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    widgetId,
    filter
  })
};

export const fetchToDoList = widgetId => dispatch => {
  tasksRef.on('value', snapshot => {
    dispatch({
      type: 'FETCH_TODO',
      meta: widgetId,
      payload: snapshot.val()
    });
  });
};
