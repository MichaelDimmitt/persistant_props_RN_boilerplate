/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  AsyncStorage,
  View,
  Keyboard,
  FlatList
} from "react-native";

export default class NewView extends Component {
  constructor(props) {
    super(props);
    this.showAllProps = this.showAllProps.bind(this);
  }

  componentDidMount() {
  }

  showAllProps() {
    return Object.keys(this.props).map((prop, index) => {
      return (<Text key={index}>{prop} : {typeof this.props[prop]}</Text>)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: 20, marginRight: 20, marginTop: 20 }}>
          <Text>See? It worked!</Text>
          <View style={{borderWidth:1, borderColor: '#000', width: '100%', padding: 2}}>
            <Text>Props:</Text>
            {this.showAllProps()}
          </View>
      </View>
    );
  }
}

var { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomGroup: {
    flex: 2,
    flexDirection: "column"
  },
  btn: {
    padding: 3,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.8
  },
  inputGroup: {
    flex: 3,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  inputStyle: {
    height: 40,
    width: width - 40,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    color: "grey"
  },
  loginGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loginGroupAccount: {
    fontSize: 16,
    color: "#000000",
    textAlign: "right"
  },
  loginGroupBtnLabel: {
    fontSize: 16,
    margin: 20,
    color: "rgb(0,179,227)",
    textAlign: "left",
    flex: 1
  },
  buttonBg: {
    backgroundColor: "#009688",
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50
  },
  buttonText: {
    fontSize: 16,
    justifyContent: "center",
    color: "white",
    alignSelf: "center",
    fontWeight: "bold"
  }
});
