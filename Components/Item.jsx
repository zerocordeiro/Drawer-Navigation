import {
    Text,
    StyleSheet,
} from "react-native";

export default function Item({title}){
    return(
        <Text style={styles.flatlistitem}>
            {title}
        </Text>
    );
}
const styles = StyleSheet.create({
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
