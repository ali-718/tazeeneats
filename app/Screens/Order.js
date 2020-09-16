import React, { Component } from "react";
import { Text, View } from "react-native";
import WebViewContainer from "../containers/WebViewContainers";

export default class Orders extends Component {
  render() {
    return (
      <WebViewContainer
        navigation={this.props.navigation}
        url="https://www.tazineeats.com/customer/account/orders"
      />
    );
  }
}
