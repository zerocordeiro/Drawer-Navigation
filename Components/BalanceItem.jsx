import React, { useState } from 'react'
import { Text, View , StyleSheet , Dimensions, Pressable , Alert, Button, FlatList} from 'react-native';
import { allStyles } from './allStyles';

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
        <Pressable style={allStyles.expandbutton}
            onPress={()=>{
                changeexpanded(true);
                // Alert.alert(JSON.stringify(expanded))
            }
            }
        //     title='MORE'
        // />
        >
            <Text style={allStyles.expbuttontext}>+</Text>
        </Pressable>
        );
    }else{
        return(
            <Pressable style={allStyles.expandbutton}
            onPress={()=>{
                changeexpanded(false);
                // Alert.alert(JSON.stringify(expanded))
            }
        }
        >
            <Text style={allStyles.expbuttontext}>-</Text>
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
        <View style={allStyles.containerview}> 
        
        <Text style={allStyles.savingstype}>{typeofaccount}</Text>
        <Text style={allStyles.savingstypevalue}>{value}</Text>
        <ExpandButton
            expanded={expanded}
            changeexpanded={openClose}
        />
        <ExtraContent expanded={expanded} dataexpanded={extradata}/>
        <View style={allStyles.separator} lightColor="#777" darkColor="rgba(255,255,255,0.1)" />
        
        </View>
        
    );
}
