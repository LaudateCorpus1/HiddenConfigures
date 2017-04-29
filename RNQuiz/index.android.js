/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

import { StackNavigator } from 'react-navigation';
import PastResultsScreen from './Screens/pastResults';
import NativeAndroidButton from './components/NativeAndroidButton';

import FirstScreen from './Screens/firstScreen';
import HelpScreen from './Screens/HelpScreen';
import DisclaimerScreen from './Screens/disclaimer';

import Flix from './components/Flix';
import indexStyles from './stylesheets';


class HomeScreen extends Component {

    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'HiddenConfigures',
    } ;


    _onButtonPress(event){

        event.preventDefault();

        navigate('Results');
    }


    render() {

        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>

                    {/*<Button onPress={() => navigate('Results')}*/}
                            {/*title="Past Results"*/}
                            {/*color="red"/>*/}
                <View style={styles.wrapper}>
                    <NativeAndroidButton
                        navigate={navigate}
                        destination="StartQuiz"
                        text="Start this quiz"
                        buttonStyle={indexStyles.middleButton}/>
                    <Text>{'\n\n'}</Text>
                    <NativeAndroidButton
                        navigate={navigate}
                        destination="Results"
                        text="Past Results"
                        buttonStyle={indexStyles.middleButton}/>
                </View>
                <View style={styles.optionsContainer1}>
                    <NativeAndroidButton navigate={navigate}
                                         destination="Help"
                                         text="Help"
                                         buttonStyle={indexStyles.bottomButton}/>
                    <NativeAndroidButton navigate={navigate}
                                         destination="About"
                                         text="About"
                                         buttonStyle={indexStyles.bottomButton}/>
                </View>

            </View>


        );
    }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    height:height,
    width:width,
    backgroundColor: '#F5FCFF',
  },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        top: 225,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    optionsContainer1:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        bottom:-300,
    },
    optionsContainer2:{
        justifyContent:'flex-start',
        alignItems:'flex-end',
        bottom:175,
    }
});

const QuizApp = StackNavigator({
    Home: {screen: HomeScreen},
    Results: {screen: PastResultsScreen},
    StartQuiz: {screen: FirstScreen},
    Help: {screen: HelpScreen},
    About: {screen: DisclaimerScreen},
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
