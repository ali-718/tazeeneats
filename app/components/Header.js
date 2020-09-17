import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { Icon } from "native-base";
import { Tooltip } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Header(props) {
  const [location, setlocation] = useState("Home");
  const [savedLocations, setSavedLocations] = useState([
    "Current Location",
    "Home",
    "Office",
  ]);
  const tooltipRef = useRef(null);

  const onToolTipPress = (name) => {
    setlocation(name);
    tooltipRef.current.toggleTooltip();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{ justifyContent: "center" }}
        onPress={() => props.navigation.toggleDrawer()}
      >
        <Icon name="menu" type="Feather" style={styles.white} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => tooltipRef.current.toggleTooltip()}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.white, { fontSize: 11 }]}>Current Location</Text>

          <Icon
            name="arrow-down"
            type="SimpleLineIcons"
            style={[styles.white, { fontSize: 13, marginLeft: 10 }]}
          />

          <TouchableWithoutFeedback>
            <Tooltip
              ref={tooltipRef}
              overlayColor="rgba(0,0,0,0.5)"
              backgroundColor="white"
              containerStyle={styles.tooTipConatiner}
              popover={
                <View style={{ width: "100%", padding: 0, margin: 0 }}>
                  {savedLocations.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => onToolTipPress(item)}
                      activeOpacity={0.5}
                      style={styles.tooTipItems}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              }
            ></Tooltip>
          </TouchableWithoutFeedback>
        </View>
        <Text style={[styles.white, { fontSize: 15, fontWeight: "bold" }]}>
          {location}
        </Text>
      </TouchableOpacity>

      <View style={{ justifyContent: "center" }}>
        <Text style={[styles.white, { fontSize: 15, fontWeight: "bold" }]}>
          $50.00
        </Text>
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
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight + 10,
  },
  white: {
    color: "white",
  },
  tooTipItems: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderBottomWidth: 0.2,
    borderColor: "black",
  },
  tooTipConatiner: {
    margin: 0,
    padding: 0,
    height: 130,
    justifyContent: "flex-start",
    width: 180,
  },
});
