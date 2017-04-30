/**
 * Created by philipbed813 on 4/29/17.
 */
/**
 * Created by philipbed813 on 4/29/17.
 */
import React, {Component} from 'react';
import {Text,View, StyleSheet, Dimensions, Linking} from 'react-native';

export default class DisclaimerScreen extends Component{
    static navigationOptions = {
        title: 'Disclaimer',
    } ;

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Disclaimer:
                </Text>

                <Text style={styles.bodyText}>
                    {'\n\n\n\n'}
                    Please take this subconcious bias quiz at your own discretion.
                    There is research for and against the validity of the results of this test.


                    {'\n\n'}
                    Please click <Text style={styles.hyperlink} onPress={() => Linking.openURL("https://www.projectimplicit.net/researchers.html")}>here</Text> to read more on this topic:

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
        backgroundColor: '#F5FCFF',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight:'bold'
    },

    bodyText: {
        textAlign:'left',
        fontSize: 20,
    },

    hyperlink:{
        color: "#05A5D1",
        textDecorationLine: 'underline',
    }
});