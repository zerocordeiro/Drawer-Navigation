import React, { Component } from 'react'
import { StyleSheet , Dimensions, Image, ImageBackground, View,  Text } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GlobalBalance(){
    return(
    
        <View style={styles.globalcontainer}>
            <ImageBackground source={require('../assets/Images/bggraph.png')} style={styles.bgimage}>
                <Text style={styles.balance}>Global Balance</Text>
                <Text style={styles.balancevalue}>1.450.500,00 CFA</Text>
            </ImageBackground>
        </View>
        
    );
}


const styles = StyleSheet.create({
balance:{
    marginTop:60,
    marginLeft:'5%',
    // width:'90%',
    fontSize: 20,
    fontWeight:'500',
    color:'#4f4f4f',
    textAlign:'left',
},
balancevalue:{
    marginBottom:50,
    marginLeft:'5%',
    // width:'90%',
    fontVariant:'small-caps',
    fontWeight:'900',
    fontFamily:'Roboto',
    fontSize: 40,
    color:'#4f4f4f',
    textAlign:'left',
},
savingstype:{
    width:'90%',
    fontFamily:'Roboto',
    fontSize: 16,
    color:'#4f4f4f',
    textAlign:'left',
},
savingstypevalue:{
    width:'90%',
    fontFamily:'Roboto',
    fontSize: 30,
    color:'#4f4f4f',
    textAlign:'left',
},
bgimage:{
    width:windowWidth,
    // borderColor:'black',
    // borderWidth:3,
},
iconespeq:{
    height:35,
    width:35,
},
});
  