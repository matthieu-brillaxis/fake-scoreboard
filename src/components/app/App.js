// @flow

import React, { PureComponent } from 'react';
import StatusProvider from 'components/fragments/StatusProvider/StatusProvider';
import Loader from 'components/fragments/Loader/Loader';
import MatchOpponents from 'components/MatchOpponents/MatchOpponents';
import ScoreBoard from 'components/ScoreBoard/ScoreBoard';
import SubScoreBoard from 'components/SubScoreBoard/SubScoreBoard';
import LineChart from 'components/fragments/LineChart/LineChart';

import type { StatusType } from 'types/statusTypes';
import type { GoldsTypes, LolFrame } from 'types/dataTypes';

import 'chart.js';
import './styles.scss';

type Props = {
  onInit: () => void,
  status: StatusType,
  data: LolFrame,
  golds: GoldsTypes,
}

class App extends PureComponent<Props> {
  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }

  handleRenderLoading = () => (<Loader />);

  handleRenderRunning = () => {
    const { data: { blue, red, current_timestamp }, golds } = this.props;
    return (
      <div className="match-container">
        <MatchOpponents
          blue={blue}
          red={red}
        />
        <ScoreBoard
          blue={blue}
          red={red}
        />
        <SubScoreBoard
          blue={blue}
          red={red}
          timer={current_timestamp}
        />
        <LineChart data={golds} />
      </div>
    );
  }

  handleRenderFailure = () => (
    <p className="">Merci de lancer le websocket !</p>
  );

  render() {
    const { status, data: { blue, red } } = this.props;
    return (
      <StatusProvider
        extraData={[status, blue, red]}
        status={status}
        renderLoading={this.handleRenderLoading}
        renderRunning={this.handleRenderRunning}
        renderFailure={this.handleRenderFailure}
      />
    );
  }
}

export default App;
