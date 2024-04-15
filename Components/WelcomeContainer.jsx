import React from 'react'
import { Text, View , StyleSheet , Dimensions, Image, Pressable} from 'react-native';
import { allStyles } from './allStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeContainer({opendrawer}){
    return(
        <>
        <View>
            <Pressable onPress={opendrawer}>
            <Image
            alt="Not find"
            // source={require("../assets/Images/user.jpg")}
            source={require("../assets/favicon.png")}
            style={allStyles.userAvatar}
            />
            </Pressable>
        
        </View>
        <View
            style={allStyles.welcomecontainer}
          >
            <Text style={allStyles.welcome}>Welcome</Text>
            <Text style={allStyles.username}>Abdul Myriad</Text>
          </View>
        </>
        
    );
}
