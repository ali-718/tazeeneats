import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import Header from "../components/Header";

export default class WebViewContainer extends Component {
  navStateChanged = (state) => {
    console.log(state);
  };

  render() {
    const userAgentAndroid =
      "Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30";

    return (
      <View style={styles.safeView}>
        <Header navigation={this.props.navigation} />
        <SafeAreaView style={styles.webview}>
          <WebView
            renderLoading={() => (
              <View style={styles.errorView}>
                <ActivityIndicator color="red" />
              </View>
            )}
            ref={(e) => (this.webview = e)}
            renderError={() => (
              <View style={styles.errorView}>
                <Text>Some error occoured</Text>
                <TouchableOpacity
                  onPress={() => this.webview.reload()}
                  style={styles.errorBtn}
                >
                  <Text style={{ color: "white" }}>retry</Text>
                </TouchableOpacity>
              </View>
            )}
            style={styles.webview}
            startInLoadingState
            source={{ uri: this.props.url }}
            injectedJavaScript={
              'document.getElementById("headersection").style.display = "none"'
            }
            userAgent={userAgentAndroid}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onNavigationStateChange={(state) => this.navStateChanged(state)}
            onMessage={() =>
              'document.getElementById("headersection").style.display = "none"'
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "tomato",
    borderRadius: 10,
    marginTop: 10,
  },
  safeView: {
    flex: 1,
  },
  errorView: {
    width: "100%",
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    flex: 1,
  },
});
