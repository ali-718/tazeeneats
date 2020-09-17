import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
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
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.Image}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_960_720.jpg",
              }}
            />

            <Text style={styles.userName}>Quick Delivery</Text>
          </View>
        </View>
        {this.state.menus.map((item, i) => (
          <DrawerItems
            navigation={() => this.props.navigation.navigate(item.route)}
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
      </View>
    );
  }
}

const DrawerItems = (props) => (
  <TouchableOpacity onPress={() => props.navigation()} style={styles.box}>
    <View style={styles.firstSide}>
      <Icon name={props.icon} type={props.iconType} />
    </View>
    <View style={styles.secondSide}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  box: { width: "100%", flexDirection: "row" },
  firstSide: {
    width: "25%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  secondSide: { width: "75%", padding: 10, justifyContent: "center" },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 3,
  },
  topContainer: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "red",
    paddingVertical: 30,
    paddingTop: 60,
  },
  userName: {
    color: "white",
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
