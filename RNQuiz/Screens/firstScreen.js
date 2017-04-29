/**
 * Created by philipbed813 on 4/26/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableNativeFeedback,
    Dimensions
} from 'react-native';

import TopicCard from '../components/topicCard';
import Flix from '../components/Flix';

export default class FirstScreen extends Component {
    static navigationOptions = {
        title: 'HiddenConfigures',
    } ;
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.leftHalf}/>
                <View style={styles.rightHalf}/>
                <Flix/>
            </View>
        );
    }

}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width:width * .5,
        height:height ,
        backgroundColor:'blue',


    },

    rightHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width:width * .5,
        height:height ,
        backgroundColor:'red',

    }
});