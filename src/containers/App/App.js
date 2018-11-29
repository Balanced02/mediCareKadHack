import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Debounce } from "react-throttle";
import { WindowResizeListener } from "react-window-resize-listener";
import { siteConfig } from "../../config.js";
import asyncComponent from "../../helpers/AsyncFunc";
import ThemeSwitcher from "../../containers/ThemeSwitcher";

import Card from "../../components/uielements/card";

import Topbar from "../../containers/Topbar/Topbar";
import Sidebar from "../../containers/Sidebar/Sidebar";
import PageLoading from "../../components/PageLoading";
import "./global.css";

import { callApi } from "../../utils";
import { login } from "../../actions/auth";
import appActions from "../../redux/app/actions";
import AppHolder from "./commonStyle";
import Dashboard from "../../views/Dashboard";

const Footer = Layout.Footer;
const { toggleAll } = appActions;
const Content = Layout.Content;

class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: this.props.authenticated,
      redirect: false,
      user: {
        userType: 'hospital'
      }
    };
  }

  componentWillMount() {
    if (!this.props.authenticated) {
      this.setState({
        ready: true,
        redirect: false,
      })
    } else {
      this.setState({ ready: true });
    }
  }

  userComponent(userType) {
    let view;
    switch (userType) {
      case "hospital":
        view = (
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        );
        break;
      default:
        view = "none";
    }
    return view;
  }

  render() {
    const userType = this.state.user.userType;
    const userComponent = this.userComponent(userType);
    console.log("already here", userType);

    return this.state.ready ? (
      <AppHolder>
        <Layout style={{ height: "100vh" }}>
          <Debounce time="1000" handler="onResize">
            <WindowResizeListener
              onResize={windowSize =>
                this.props.toggleAll(
                  windowSize.windowWidth,
                  windowSize.windowHeight
                )
              }
            />
          </Debounce>
          <Topbar {...this.props} />
          <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
            <Sidebar {...this.props} />
            <Layout
              className="isoContentMainLayout"
              style={{
                height: "100vh"
              }}
            >
              <Content
                className="isomorphicContent"
                style={{
                  padding: "70px 0 0",
                  flexShrink: "0",
                  background: "#f1f3f6"
                }}
              >
                <Card>{userComponent}</Card>
              </Content>
              {userType === "hospital" ? (
                <Footer
                  style={{
                    background: "#ffffff",
                    textAlign: "center",
                    borderTop: "1px solid #ededed"
                  }}
                >
                  <a href="https://web.facebook.com/Adebalanced02">
                    {" "}
                    {siteConfig.footerText}
                  </a>
                </Footer>
              ) : (
                <i />
              )}
            </Layout>
          </Layout>
          <ThemeSwitcher />
        </Layout>
      </AppHolder>
    ) : !this.state.redirect ? (
      <PageLoading />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user,
    toggleAll,
    selectedTheme: state.ThemeSwitcher.toJS().changeThemes.themeName
  };
};

export default connect(mapStateToProps)(Full);
