/**
 * Created by philipbed813 on 4/29/17.
 */

import React, {Component} from 'react';
import {Text,View, StyleSheet, Dimensions} from 'react-native';

import NativeAndroidButton from '../components/NativeAndroidButton'
import indexStyles from "../stylesheets";

export default class PastResultsScreen extends Component{
    static navigationOptions = {
        title: 'Past Results',
    } ;

    render(){

        let {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.item}>

                    <Text style={styles.text}>Date: 04/22/17</Text>

                    <Text>{'\n'}</Text>

                    <Text style={styles.text}>Results: Moderate Association between 'Female' and 'Computing'</Text>
                </View>
                <View style={styles.item}>

                    <Text style={styles.text}>Date: 04/15/17</Text>

                    <Text>{'\n'}</Text>

                    <Text style={styles.text}>Results: Moderate Association between 'Female' and 'Computing'</Text>
                </View>
            </View>

        );
    }
}

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        height: height,
        width: width,
        backgroundColor: '#DCF2FF',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold'
    },

    bodyText: {
        textAlign: 'center',
        color: '#a7dbde',
        fontSize: 34,
        paddingBottom: 70,
    },

    item: {
        flexDirection: 'column',
        backgroundColor: 'white',
        width: width * .8,
        height: 120,
        marginTop: 40,
        elevation: 8
    },

    holder: {
        flexWrap:'wrap',
        flexDirection:'row'
    },


    text: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18
    }


});