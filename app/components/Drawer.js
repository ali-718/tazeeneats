import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Icon } from "native-base";

export default class Drawer extends Component {
  state = {
    menus: [
      {
        title: "My Orders",
        icon: "food",
        iconType: "MaterialCommunityIcons",
        route: "Orders",
      },
      {
        title: "My Profile",
        icon: "person",
        iconType: "MaterialIcons",
        route: "Profile",
      },
      {
        title: "My Adresses",
        icon: "address",
        iconType: "Entypo",
        route: "Addresses",
      },
      {
        title: "Terms & Conditions",
        icon: "clipboard-list",
        iconType: "FontAwesome5",
        route: "Terms",
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.menus.map((item, i) => (
          <DrawerItems
            key={i}
            icon={item.icon}
            iconType={item.iconType}
            title={item.title}
          />
        ))}
        <DrawerItems
          icon={"logout"}
          iconType={"MaterialCommunityIcons"}
          title={"Logout"}
        />
      </SafeAreaView>
    );
  }
}

const DrawerItems = (props) => (
  <View style={styles.box}>
    <View style={styles.firstSide}>
      <Icon name={props.icon} type={props.iconType} />
    </View>
    <View style={styles.secondSide}>
      <Text>{props.title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingTop: 20,
  },
  box: { width: "100%", flexDirection: "row" },
  firstSide: {
    width: "25%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  secondSide: { width: "75%", padding: 10, justifyContent: "center" },
});
