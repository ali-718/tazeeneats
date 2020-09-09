import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <Icon name="menu" type="Feather" style={styles.white} />
      </TouchableOpacity>

      <View>
        <Text style={[styles.white, { fontSize: 20 }]}>50</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 15,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  white: {
    color: "white",
  },
});
