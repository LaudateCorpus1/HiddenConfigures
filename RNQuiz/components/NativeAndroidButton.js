import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableNativeFeedback,
    Dimensions,
    Alert,
} from 'react-native';

export default class NativeAndroidButton extends Component{



    render(){
        let {navigate,destination,text,buttonStyle } = this.props;
        if (destination != "StartQuiz") {


            return (

                <TouchableNativeFeedback
                    onPress={(e) => {TouchableNativeFeedback.Ripple("#000000"); navigate(destination);}}
                    background={TouchableNativeFeedback.Ripple("#000000")}>
                    <View style={buttonStyle}>
                        <Text style={styles.instructions}>
                            {text}
                        </Text>
                    </View>

                </TouchableNativeFeedback>
            );
        }

        else{
            return(
                <TouchableNativeFeedback
                    onPress={
                        (e) => {
                            TouchableNativeFeedback.Ripple("#000000");
                            Alert.alert(
                                "Disclaimer",
                                "Please take this subconcious bias quiz at your own discretion."+
                                "There is research for and against the validity of the results of this test.",
                                [
                                    {text: "Decline", style:"cancel"},
                                    {text: "Accept", onPress: ()=> {navigate(destination);}}
                                ]
                            );
                            {/*navigate(destination);*/}
                        }
                    }
                    background={TouchableNativeFeedback.Ripple("#000000")}>
                    <View style={buttonStyle}>
                        <Text style={styles.instructions}>
                            {text}
                        </Text>
                    </View>

                </TouchableNativeFeedback>
            );
        }
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
        justifyContent: 'center',
        alignItems: 'center',
        width:width * .8,
        height:40,
        backgroundColor:'red',
        elevation: 12

    }
});
