import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import WelcomeContainer from "../Components/WelcomeContainer";
import GlobalBalance from "../Components/GlobalBalance";
import BalanceItem from "../Components/BalanceItem";
import { allStyles } from "../Components/allStyles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id:'1',
      title:<WelcomeContainer
        opendrawer = {()=>navigation.openDrawer()}
      />,
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
      extradata={
        [
          {
              id:'31',
              title:'33.000,00',
          },
          {
              id:'32',
              title:'500,00',
          },
          {
              id:'33',
              title:'350.000,00',
          },
          {
              id:'34',
              title:'12.500,00',
          },
      ]
      }
    />,
    },
    {
      id:'4',
      title:<BalanceItem 
      typeofaccount={'Shared Account'}
      value={'50.000,00 CFA'}
      extradata={
        [
          {
              id:'41',
              title:'44.000,00',
          },
          {
              id:'42',
              title:'500,00',
          },
          {
              id:'43',
              title:'350.000,00',
          },
          {
              id:'44',
              title:'12.500,00',
          },
      ]
      }
    />,
    },
    {
      id:'5',
      title:<BalanceItem 
      typeofaccount={'Shared Account 2'}
      value={'100.000,00 CFA'}
      extradata={
        [
          {
              id:'51',
              title:'55.000,00',
          },
          {
              id:'52',
              title:'500,00',
          },
          {
              id:'53',
              title:'350.000,00',
          },
          {
              id:'54',
              title:'12.500,00',
          },
      ]
      }
    />,
    },
    {
      id:'6',
      title:'this is the final list item for now...',
    },
  ]
  const Item = ({title}) => (
    <Text style={allStyles.flatlistitem}>
      {title}
    </Text>
  );

  return (
    <View style={allStyles.container}>
      {/* <Text>Hello!</Text> */}
      {/* <Text style={{margin:50}}>Placeholder text</Text>
      <Text style={{margin:50}}>Placeholder text</Text> */}
      <FlatList 
        data={DATA}
        renderItem={({item})=> <Item title={item.title}/>}
        keyextractor={e=>e.id}
      />

      {/* <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.DrawerButton1}
      >
        <Text style={styles.ButtonText}>Drawer</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
