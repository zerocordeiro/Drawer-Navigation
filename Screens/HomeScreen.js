import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import WelcomeContainer from "../Components/WelcomeContainer";
import GlobalBalance from "../Components/GlobalBalance";
import BalanceItem from "../Components/BalanceItem";

const HomeScreen = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id:'1',
      title:<WelcomeContainer/>,
    },
    {
      id:'2',
      title:<GlobalBalance />,
    },
    {
      id:'3',
      title:<BalanceItem 
      typeofaccount={'Savings Account'}
      value={'1.000.000,00 CFA'}
    />,
    },
    {
      id:'4',
      title:<BalanceItem 
      typeofaccount={'Shared Account'}
      value={'50.000,00 CFA'}
    />,
    },
    {
      id:'5',
      title:<BalanceItem 
      typeofaccount={'Shared Account 2'}
      value={'100.000,00 CFA'}
    />,
    },
    {
      id:'6',
      title:'this is the final list item for now...',
    },
  ]
  const Item = ({title}) => (
    <Text style={styles.flatlistitem}>
      {title}
    </Text>
  );
  function ListContent(){
    return(
      <Text style={{backgroundColor:'#dd23aa67'}}>
        {/* // OBS: If you wrap this in a view instead of a text the lines won't break. */}
        <Text >This is a content for the list that is passed as an element.{'\n'}</Text>
        <Text>We can add a lot of stuff here, and even make whole sessions with different stuff</Text>
      </Text>
      
      
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      {/* <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text> */}
      <FlatList 
        data={DATA}
        renderItem={({item})=> <Item title={item.title}/>}
        keyextractor={e=>e.id}
      />

      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.DrawerButton1}
      >
        <Text style={styles.ButtonText}>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eedede",
    alignItems: "center",
    justifyContent: "center",
  },
  DrawerButton1: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    position:'absolute',
    top:30,
    left:10,
  },
  ButtonText: {
    color: "#fff",
  },
  title: {
    color:'red',
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
