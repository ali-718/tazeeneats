import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Drawer from "./components/Drawer";
import Orders from "./Screens/Order";
import Terms from "./Screens/Terms";
import Profile from "./Screens/Profile";
import Address from "./Screens/Address";

const DrawerNav = createDrawerNavigator();
const StackNav = createStackNavigator();

// function Routes() {
//   return (
//     <NavigationContainer>
//       <DrawerNav.Navigator drawerContent={(props) => <Drawer {...props} />}>
//         <DrawerNav.Screen name="home" component={Home} />
//       </DrawerNav.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator drawerContent={(props) => <Drawer {...props} />}>
        <DrawerNav.Screen name="home" component={Home} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="Orders" component={Orders} />
        <DrawerNav.Screen name="Terms" component={Terms} />
        <DrawerNav.Screen name="Addresses" component={Address} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
