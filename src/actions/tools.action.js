export const changeLanguague = value => dispatch => {
  dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: value
  });
};

export const featchExchangeRate = () => dispatch => {
  fetch('//www.vietcombank.com.vn/exchangerates/ExrateXML.aspx', {
    mode: 'no-cors'
  })
    .then(res => res.text())
    .then(xmlString =>
      new window.DOMParser().parseFromString(xmlString, 'text/xml')
    )
    .then(data => console.log(data));
};
