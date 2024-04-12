import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
import ThirdScreen from "./Screens/ThirdScreen";
import FourthScreen from "./Screens/FourthScreen";
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
        name="Second Screen"
        component={SecondScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Third Screen"
        component={ThirdScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Screen n.4"
        component={FourthScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
