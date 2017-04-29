/**
 * Created by philipbed813 on 4/27/17.
 */
import {StyleSheet, Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

export default indexStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    optionsContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        bottom:-175,
    },
    instructions: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',

    },
    middleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width * .8,
        height:60,
        backgroundColor:'red',
        elevation: 12
    },
    bottomButton:{

        justifyContent: 'center',
        alignItems: 'center',
        width:width * .3,
        height:60,
        backgroundColor:'red',
        elevation: 12,
    }
});
