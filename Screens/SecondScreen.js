import { StyleSheet, Text, View, TouchableOpacity , ScrollView , FlatList, Pressable} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import WelcomeContainer from "../Components/WelcomeContainer";
import { allStyles } from "../Components/allStyles";
import { LineChartShow } from "../Components/LineChartShow";
// import Item from "../Components/Item";

export const linedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, ],
      strokeWidth: 2, // optional
    },
  ],
};

const ELEMENTS= (openfc) =>[
  {
    id:'el0',
    title:< WelcomeContainer opendrawer = {openfc}/>,
  },
  {
    id:'el1',
    title:< LineChartShow />,
  },
  {
    id:'el2',
    title:'< LineChartShow />',
  },
]
const Item = ({title}) => (
  <Text style={ allStyles.flatlistitem}>
    {title}
  </Text>
);
const SecondScreen = () => {
  const navigation = useNavigation();
  const opendrawerfc = () =>{
    navigation.openDrawer();
  }
  return (
    <View style={allStyles.container}>
      {/* <Text>This is the second screen</Text> */}
      {/* <Pressable onPress={opendrawerfc}><Text>Press</Text></Pressable> */}
      <FlatList
        data={ELEMENTS(opendrawerfc)}
        renderItem={({item})=> <Item title={item.title}/>}
        keyextractor={e=>e.id}
      />      
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={allStyles.DrawerButton}
      >
        <Text style={allStyles.ButtonText}> Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

