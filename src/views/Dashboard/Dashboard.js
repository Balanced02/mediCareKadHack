import React, { Component } from "react";
import Card from "../../components/uielements/card";
import { connect } from "react-redux";
import "../../containers/App/global.css";
import DashboardSummary from "../../components/DashboardSummary";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searching: true
    };
  }

  componentWillMount() {
  }

  render() {
    const { customizedTheme } = this.props;
    const { data } = this.state;
    return (
      <div
        style={{
          backgroundColor: customizedTheme.backgroundColor
        }}
      >
        <Card>
          <DashboardSummary data={data} searching={false} />
        </Card>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS(),
  customizedTheme: state.ThemeSwitcher.toJS().layoutTheme,
  user: state.auth.user
}))(Dashboard);
