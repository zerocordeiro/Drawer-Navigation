import { StyleSheet, Text, View, TouchableOpacity , ScrollView , Dimensions, FlatList, Pressable} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import WelcomeContainer from "../Components/WelcomeContainer";
// import Item from "../Components/Item";

const linedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, ],
      strokeWidth: 2, // optional
    },
  ],
};

function LineChartShow(){
  return(
    <LineChart
        data={linedata}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={`EUR `}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
  );
}

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
  <Text style={styles.flatlistitem}>
    {title}
  </Text>
);
const SecondScreen = () => {
  const navigation = useNavigation();
  const opendrawerfc = () =>{
    navigation.openDrawer();
  }
  return (
    <View style={styles.container}>
      <Text>This is the second screen</Text>
      {/* <Pressable onPress={opendrawerfc}><Text>Press</Text></Pressable> */}
      <FlatList
        data={ELEMENTS(opendrawerfc)}
        renderItem={({item})=> <Item title={item.title}/>}
        keyextractor={e=>e.id}
      />      
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.DrawerButton}
      >
        <Text style={styles.ButtonText}> Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

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
  flatlistitem:{
    // paddingTop:0,
    // paddingBottom:0,
    backgroundColor:'#fff',
    // borderColor:'#232323',
    // borderWidth:1, 
    width:'100%',
    // padding:10,
    flexDirection:'column',
  },
});
