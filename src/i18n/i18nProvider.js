import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';

// Register locale data
addLocaleData([...en, ...vi]);

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
export default connect(state => {
  return {
    locale: state.locales.lang,
    key: state.locales.lang,
    messages: state.locales.messages
  };
})(IntlProvider);
