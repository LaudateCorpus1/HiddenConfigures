/**
 * Created by philipbed813 on 4/25/17.
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

import SwipeCards from 'react-native-swipe-cards';

export default class TopicCard extends Component {



    render(){
        let {text } = this.props;
        return(


            <TouchableNativeFeedback onPress={() => {TouchableNativeFeedback.Ripple("#FFFFFF"); }}
                                     background={TouchableNativeFeedback.Ripple("#FFFFFF")}

            >
                <View style={styles.button}>
                    <Text style={styles.instructions}>
                        {text}
                    </Text>
                </View>

            </TouchableNativeFeedback>

        );
    }

}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

    button: {
        // flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width:width * .5,
        height:height * .5,
        backgroundColor:'#a7dbde',
        elevation: 10,
        borderRadius: 100
    }
});