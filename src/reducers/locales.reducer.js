import en from '../i18n/locale-data/en.json';
import vi from '../i18n/locale-data/vi.json';
import * as actionType from '../constants/ActionTypes';

const initState = {
  lang: 'en',
  messages: en
};

const getTranslatedMessage = language => {
  switch (language) {
    case 'en':
      return en;
    case 'vi':
      return vi;
    default:
      return en;
  }
};

export const locales = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: payload,
        messages: getTranslatedMessage(payload)
      };
    default:
      return state;
  }
};
