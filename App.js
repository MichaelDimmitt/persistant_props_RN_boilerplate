/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, createElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Dimensions
} from "react-native";
import Home from "./Components/home.js";
const createClass = require('create-react-class');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: [],
      currentCount: 0
    };
    this.renderScene = this.renderScene.bind(this);
    this.renderNavigator = this.renderNavigator.bind(this);
    this.pushView = this.pushView.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount() {
    this.pushView(Home, {}, "Home");
  }

  pushView(view, props, name) {
    let stateViews = this.state.views;
    let currentView = stateViews[this.state.views.length - 1];

    if (currentView && this.refs.current) {
      currentView.state = this.refs.current.state;
    }

    let pushThis = stateViews.concat({
      Component: view,
      props: props,
      name: name
    });
    this.setState({ views: pushThis });
  }

  goBack() {
    deleteView = this.state.views;
    deleteView.pop();
    this.setState({ views: deleteView });
  }

  renderNavigator() {
    let currentView = this.state.views[this.state.views.length - 1];
    return (
      <View style={styles.navbarView}>
        {this.state.views.length > 1
          ? <TouchableHighlight
              style={styles.leftNavButton}
              onPress={() => this.goBack()}
            >
              <Text style={styles.leftNavButtonText}>{"<"}</Text>
            </TouchableHighlight>
          : <Text style={styles.leftNavButtonText}>{"  "}</Text>}
        <View style={styles.titleView}>
          <Text style={styles.title}>{currentView.name}</Text>
        </View>
        <View style={styles.rightNavButton}>
          {currentView.props.rightBtn
            ? currentView.props.rightBtn
            : <Text>  </Text>}
        </View>
      </View>
    );
  }

  renderScene() {
    let currentView = this.state.views[this.state.views.length - 1];
    let element = currentView.Component;
    //SET INIT STATE HERE
    let elementFuncNames = Object.getOwnPropertyNames(element.prototype);
    let newObject = {
      //We can add custom callback functions here such as goBack() for navigation
      getInitialState: function() {
        return currentView.state || {};
      }
    };
    for (let obj of elementFuncNames) {
      if (obj == "constructor") {
        //TODO
      } else {
        newObject[obj] = element.prototype[obj];
      }
    }
    let classInstance = createClass(newObject);
    let elementInstance = createElement(classInstance, {
      pushView: this.pushView,
      props: {} //Cannot set here.
    });
    return (
      <elementInstance.type
        ref="current"
        pushView={this.pushView}
        {...currentView.props}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavigator()}
        <View style={styles.componentContainer}>
          {this.renderScene()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    flexDirection: "column"
  },
  componentContainer: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0
  },
  navbarView: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    paddingTop: 20,
    zIndex: 100,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 1,
    shadowOpacity: 0.8
  },
  titleView: {
    flex: 0.8,
    alignItems: "center",
    alignSelf: "center"
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold"
  },
  rightNavButtonText: {
    color: "#000",
    fontSize: 24,
    marginRight: 20
  },
  leftNavButtonText: {
    color: "#000",
    fontSize: 24,
    marginLeft: 20
  },
  rightNavButton: {
    flex: 0.1,
    alignItems: "center",
    alignSelf: "center"
  },
  leftNavButton: {
    flex: 0.1,
    alignItems: "center",
    alignSelf: "center"
  }
});
