import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({

    baseContainer:{
        backgroundColor: "#f2ecff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        height:"100%",
        width:"100%",
        backgroundColor: '#EBF0EE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height:100,
        width:100,
        marginBottom:50
    },
    inputText:{
        marginTop:5, 
        marginBottom:10,
        borderWidth:0.2,
        textAlign: 'center',
        borderColor: "#3a495c",           
        color: '#3a495c',
        width:"75%",
              
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
      },
    buttonGroupItem: {
    width: '50%', // is 50% of container width
    padding:10
    }

    
});