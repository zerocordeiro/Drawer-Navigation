import { StyleSheet , Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const allStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eedede",
        alignItems: "center",
        justifyContent: "center",
        top:30,
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
    },
    chartview:{
        paddingTop:10,
    }
});

export { allStyles }