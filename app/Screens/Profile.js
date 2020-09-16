import React, { Component } from "react";
import { Text, View } from "react-native";
import WebViewContainer from "../containers/WebViewContainers";

export default class Profile extends Component {
  render() {
    return (
      <WebViewContainer
        navigation={this.props.navigation}
        url="https://www.tazineeats.com/customer/account/profile"
      />
    );
  }
}
