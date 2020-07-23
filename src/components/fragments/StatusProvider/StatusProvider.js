// @flow

import { Component } from 'react';
import {
  STATUS_DEFAULT,
  STATUS_LOADING,
  STATUS_RUNNING,
  STATUS_FAILURE,
} from 'constants/status';

type Props = {
  status: STATUS_DEFAULT | STATUS_LOADING | STATUS_FAILURE | STATUS_RUNNING,
  extraData?: any,
  keepCache?: boolean,
  renderDefault?: ?() => any,
  renderLoading?: ?() => any,
  renderRunning?: ?() => any,
  renderFailure?: ?() => any,
};

class StatusProvider extends Component<Props> {
  static defaultProps = {
    extraData: null,
    keepCache: false,
    renderDefault: null,
    renderRunning: null,
    renderLoading: null,
    renderFailure: null,
  };

  shouldComponentUpdate(nextProps: Props) {
    const { status, extraData, keepCache } = this.props;

    if (keepCache) {
      if (status === 'success' && nextProps.status === 'loading') {
        return false;
      }
    }

    return (nextProps.status !== status || nextProps.extraData !== extraData);
  }

  renderContent = () => {
    const {
      status,
      renderDefault,
      renderLoading,
      renderFailure,
      renderRunning,
    } = this.props;

    switch (status) {
      case STATUS_DEFAULT:
        return renderDefault ? renderDefault() : null;
      case STATUS_LOADING:
        return renderLoading ? renderLoading() : null;
      case STATUS_FAILURE:
        return renderFailure ? renderFailure() : null;
      case STATUS_RUNNING:
        return renderRunning ? renderRunning() : null;
      default:
        return null;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default StatusProvider;
