import React, { useState } from 'react'
import { Text, View , StyleSheet , Dimensions, Pressable} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ExpandButton({expanded, changeexpanded}){
    if(expanded==false){
        return(
        <Pressable style={styles.expandbutton}
            // onPress={()=>
            //     {changeexpanded(!expanded)}
            // }
        >
            <Text style={styles.expbuttontext}>MORE</Text>
        </Pressable>
        );
    }else{
        return(
            <Pressable style={styles.expandbutton}
            // onPress={
            //     ()=>{}
            // } 
            >
                <Text style={styles.expbuttontext}>LESS</Text>
            </Pressable>
        );
    }
    
}
let a=0;
export default function BalanceItem({typeofaccount,value}){
    const [expanded,setExpanded] = useState(false);
    function openClose(valueexp){()=>
        setExpanded(valueexp);
    }


    return(
        <View style={styles.containerview}> 
        <ExpandButton
            expanded={expanded}
            changeexpanded={openClose()}
        />
        <Text style={styles.savingstype}>{typeofaccount}</Text>
        <Text style={styles.savingstypevalue}>{value}</Text>
        
        <View style={styles.separator} lightColor="#777" darkColor="rgba(255,255,255,0.1)" />
        </View>
        
    );
}

const styles = StyleSheet.create({
    containerview:{
        width:windowWidth,
        padding:10,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor:'#9a9a9a',
        marginTop:10,
    },
    savingstype:{
        width:'90%',
        fontFamily:'Roboto',
        fontSize: 16,
        fontWeight:'800',
        color:'#4f4f4f',
        textAlign:'left',
    },
    savingstypevalue:{
        width:'90%',
        fontFamily:'Roboto',
        fontSize: 30,
        fontWeight:'900',
        color:'#4f4f4f',
        textAlign:'left',
    },
    expandbutton:{
        width:40,
        height:40,
        backgroundColor:'#666666',
        borderWidth:2,
        borderColor:'#0044ee',
        borderRadius:10,
        position:'absolute',
        marginTop:20,
        right:'10%',
    },
    expbuttontext:{
        color:'white',
    }
    });
