import { createSelector } from 'reselect';

export const getVisibilityFilter = (state, props) => {
  const todo = state[props.widgetId];
  return todo ? todo.visibilityFilter : 'SHOW_ALL';
};

export const getTodos = (state, props) => {
  const todo = state[props.widgetId];
  return todo ? todo.tasks : [];
};

export const getVisibleTodos = () =>
  createSelector([getVisibilityFilter, getTodos], (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.isCompleted);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  });

export const getTotalInCompletedTasks = () =>
  createSelector([getTodos], todos => todos.filter(t => !t.isCompleted).length);
