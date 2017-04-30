/**
 * Created by philipbed813 on 4/29/17.
 */
/**
 * Created by philipbed813 on 4/29/17.
 */
import React, {Component} from 'react';
import {Text,View, StyleSheet, Dimensions} from 'react-native';

import NativeAndroidButton from '../components/NativeAndroidButton'
import indexStyles from "../stylesheets";

export default class FinalScreen extends Component{
    static navigationOptions = {
        title: 'Finished',
    } ;

    render(){

        let {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Your Results:
                </Text>

                <Text style={styles.bodyText}>
                    {'\n\n\n\n'}
                    Moderate Association between 'Male' and 'Computing'
                </Text>

                <NativeAndroidButton
                    navigate={navigate}
                    destination="QuizResults"
                    text="View Past Results"
                    buttonStyle={indexStyles.middleButton}
                />
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
        backgroundColor: '#F5FCFF',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight:'bold'
    },

    bodyText: {
        textAlign:'center',
        color: '#a7dbde',
        fontSize: 34,
        paddingBottom: 70,
    }

});