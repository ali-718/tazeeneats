import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import Drawer from "./components/Drawer";

const DrawerNav = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator drawerContent={(props) => <Drawer {...props} />}>
        <DrawerNav.Screen name="home" component={Home} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
