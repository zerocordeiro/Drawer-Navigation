import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import CustomDrawer from "./Components/CustomDrawer";
const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
