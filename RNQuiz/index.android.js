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
    Dimensions,
    Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import PastResultsScreen from './Screens/pastResults';
import NativeAndroidButton from './components/NativeAndroidButton';

import FirstScreen from './Screens/firstScreen';
import SecondScreen from './Screens/secondScreen';
import HelpScreen from './Screens/HelpScreen';
import DisclaimerScreen from './Screens/disclaimer';
import FinalScreen from './Screens/FinalScreen';

import Flix from './components/Flix';
import indexStyles from './stylesheets';
import ResultsAfterTestScreen from "./Screens/ResultsAfterTestScreen";


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


                <Image
                    style={styles.img}
                    source={require('./img/hiddenConfigures.jpg')}
                />
                <View style={styles.wrapper}>
                    <NativeAndroidButton
                        navigate={navigate}
                        destination="StartQuiz"
                        text="Start Quiz"
                        buttonStyle={indexStyles.middleButton}/>
                    <Text>{'\n\n'}</Text>
                    <NativeAndroidButton
                        navigate={navigate}
                        destination="Results"
                        text="Past Results"
                        buttonStyle={indexStyles.middleButton}/>
                </View>
                <View style={styles.optionsContainer}>
                    <NativeAndroidButton navigate={navigate}
                                         destination="Help"
                                         text="Help"
                                         buttonStyle={indexStyles.bottomButton}/>
                    <NativeAndroidButton navigate={navigate}
                                         destination="About"
                                         text="Disclaimer"
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
    backgroundColor: '#DCF2FF',
  },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    optionsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        bottom: -70,
    },
    optionsContainer2:{
        justifyContent:'flex-start',
        alignItems:'flex-end',
        bottom: 175,
    },
    img:{
        height: 200,
        width: width,
    },
});

export const QuizApp = StackNavigator({
    Home: {screen: HomeScreen},
    Results: {screen: PastResultsScreen},
    StartQuiz: {screen: FirstScreen},
    Help: {screen: HelpScreen},
    About: {screen: DisclaimerScreen},
    SecondPhase: {screen:SecondScreen},
    LastPhase: {screen: FinalScreen},
    QuizResults: {screen: ResultsAfterTestScreen}
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);
