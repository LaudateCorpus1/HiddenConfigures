/**
 * Created by philipbed813 on 4/24/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';

export default class PastResultsScreen extends Component{
    static navigationOptions = {
      title: 'Past Results',
    };

    render(){
        return(
            <View>
                <Text>Past Results</Text>
            </View>
        );
    }
}