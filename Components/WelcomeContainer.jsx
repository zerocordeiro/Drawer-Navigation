import React from 'react'
import { Text, View , StyleSheet , Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeContainer(){
    return(
        <>
        <View
            style={styles.welcomecontainer}
          >
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.username}>Abdul Myriad</Text>
          </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        // height:windowHeight,
        // height:80,
        top:30,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
    },
    separator: {
        marginVertical: 10,
        height: 1,
        backgroundColor:'#4f4f4f',
        width: windowWidth,
    },
    welcomecontainer:{
        // backgroundColor:'none',
        // position:'absolute',
        top:0,
        width:'90%',
        textAlign:'left',
        padding:10,
    },
    welcome:{
        // backgroundColor:'none',
        // position:'absolute',
        // top:0,
        // width:'90%',
        fontSize: 16,
        color:'#4f4f4f',
        textAlign:'left',
    },
    username:{
        // backgroundColor:'none',
        width:'90%',
        fontSize: 28,
        fontWeight:'bold',
        color:'#f68c23',
        textAlign:'left',
    },


    });
