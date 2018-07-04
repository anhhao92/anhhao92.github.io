import { createSelector } from 'reselect';

const getConfigButtonSelector = props => {
  const { isEditDashboard, isEditing, widgetType } = props;
  return (!isEditing && isEditDashboard) || !widgetType;
};

const getMaximizeButtonSelector = props => {
  const { isEditing, widgetType } = props;
  return !isEditing && widgetType;
};

const getRemoveButtonSelector = props => {
  const { isEditDashboard, widgetType } = props;
  return isEditDashboard && widgetType;
};

export const getConfigButtonState = createSelector(
  [getConfigButtonSelector],
  state => state
);

export const getMaximizeButtonState = createSelector(
  [getMaximizeButtonSelector],
  state => state
);

export const getRemoveButtonState = createSelector(
  [getRemoveButtonSelector],
  state => state
);
