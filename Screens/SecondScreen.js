import { StyleSheet, Text, View, TouchableOpacity , ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is the second screen</Text>
      <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text>
      
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.DrawerButton}
      >
        <Text style={styles.ButtonText}> Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DrawerButton: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ButtonText: {
    color: "#fff",
  },
});
