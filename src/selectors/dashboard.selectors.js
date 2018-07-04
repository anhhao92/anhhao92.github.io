import { createSelector } from 'reselect';
import { LAYOUT_TYPES } from '../constants';
const getTotalWidget = state => {
  const widgets = state.dashboard.widgets;
  return Object.keys(widgets).length;
};

const getLayoutType = state => state.dashboard.layoutType;

export const getNumberOfPlaceHolder = createSelector(
  [getTotalWidget, getLayoutType],
  (total, type) => {
    switch (type) {
      case LAYOUT_TYPES.A_COLUMN:
        return 1;
      case LAYOUT_TYPES.ABA_COLUMN:
      case LAYOUT_TYPES.AAA_COLUMN:
        if (total % 3 === 0) return 3;
        else if (total % 3 === 1) return 2;
        return 1;
      case LAYOUT_TYPES.AA_COLUMN:
      case LAYOUT_TYPES.AB_COLUMN:
      case LAYOUT_TYPES.BA_COLUMN:
        return total % 2 === 0 ? 2 : 1;
    }
    return 1;
  }
);
