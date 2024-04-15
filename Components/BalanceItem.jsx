import React, { useState } from 'react'
import { Text, View , StyleSheet , Dimensions, Pressable , Alert, Button, FlatList} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATABALANCE=[
    {
        id:'11',
        title:'10.000,00',
    },
    {
        id:'22',
        title:'500,00',
    },
    {
        id:'33',
        title:'350.000,00',
    },
    {
        id:'44',
        title:'12.500,00',
    },
]

function ExpandButton({expanded, changeexpanded}){
    if(expanded==false){
        return(
        <Pressable style={styles.expandbutton}
            onPress={()=>{
                changeexpanded(true);
                // Alert.alert(JSON.stringify(expanded))
            }
            }
        //     title='MORE'
        // />
        >
            <Text style={styles.expbuttontext}>+</Text>
        </Pressable>
        );
    }else{
        return(
            <Pressable style={styles.expandbutton}
            onPress={()=>{
                changeexpanded(false);
                // Alert.alert(JSON.stringify(expanded))
            }
        }
        >
            <Text style={styles.expbuttontext}>-</Text>
        </Pressable>
        );
    }
    
}
function ItemBalance({title}){
    return(
        <Text style={{fontSize:24, color:'#898989'}}>
            x...................{title}
        </Text>
    );
}
    
function ExtraContent({expanded, dataexpanded}){
    if(expanded==false){
        return(<></>);
    }else{
        return(
            <FlatList 
                data={dataexpanded}
                renderItem={({item})=> <ItemBalance title={item.title}/>
                    }
                keyExtractor={e=>e.id}
            />
        )
    }
}

export default function BalanceItem({typeofaccount,value,extradata}){
    const [expanded,setExpanded] = useState(false);
    function openClose(valueexp){
        setExpanded(valueexp);
        // Alert.alert('troucou valor');
    }


    return(
        <View style={styles.containerview}> 
        
        <Text style={styles.savingstype}>{typeofaccount}</Text>
        <Text style={styles.savingstypevalue}>{value}</Text>
        <ExpandButton
            expanded={expanded}
            changeexpanded={openClose}
        />
        <ExtraContent expanded={expanded} dataexpanded={extradata}/>
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
        backgroundColor:'#9a9a9a',
        borderWidth:0,
        borderColor:'#dadada',
        borderRadius:30,
        position:'absolute',
        marginTop:20,
        // marginBottom:5,
        right:'10%',
    },
    expbuttontext:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        textAlignVertical:'center',
        lineHeight:35,
    }
    });
