import React from 'react';
import { connect } from 'react-redux';
import { PlaceHolderWidgetView } from './PlaceHolderWidget.view';
import { DashboardActionCreator } from '../../actions/dashboard.action';

export default class PlaceHolderWidget extends React.PureComponent {
  render() {
    return <PlaceHolderWidgetView />;
  }
}

// export default connect()(PlaceHolderWidget);
