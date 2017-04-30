/**
 * Created by philipbed813 on 4/29/17.
 */
import React, {Component} from 'react';
import {Text,View, StyleSheet, Dimensions} from 'react-native';

export default class HelpScreen extends Component{
    static navigationOptions = {
        title: 'Help',
    } ;

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Instructions:
                </Text>

                <Text style={styles.bodyText}>
                    {'\n\n\n\n'}
                    When the test begins you will be provided with a series of words. Two categories will be
                    located on the top-left and top-right. As quickly as possible, you will swipe thee words
                    into the left or right side of the screen, towards the category you associate the image with.

                    You can view your previous results by pressing the "Past Results" button on the main menu.
                </Text>


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
    },
    titleText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight:'bold'
    },

    bodyText: {
        textAlign:'center',
        fontSize: 20,
        width: width*.8,
        marginLeft: 30,
    }

});