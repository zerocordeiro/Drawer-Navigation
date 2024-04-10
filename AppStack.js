import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
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
      <Drawer.Screen
        name="HomeScreen1"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HomeScreen2"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HomeScreen3"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
