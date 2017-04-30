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
    Dimensions,
    ProgressBarAndroid,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopicCard from '../components/topicCard';
import Flix from '../components/Flix';

let content =
    {
        leftCat: "Computing",
        rightCat: "Economics",
        items: [{topic:"IT",direction:-1}, {topic:"Website",direction:-1}, {topic:"Programming",direction:-1},
            {topic:"Code",direction:-1}, {topic:"Laptop",direction:-1}, {topic:"Processor",direction:-1},
            {topic:"Hard Drive",direction:-1},
            {topic:"Supply",direction:1}, {topic:"Stocks",direction:1}, {topic:"Demand",direction:1},
            {topic:"Inflation",direction:1}, {topic:"Business",direction:1}, {topic:"Market",direction:1},
            {topic:"Profit",direction:1}, {topic:"Sales Consumer",direction:1}],
    };

let progress = 0;

export default class FirstScreen extends Component {

    constructor(props){
        super(props);

        this.shuffle(content);

        this.state = {
            progress: 0,
            percentage: 0,
            started: false,
        }
    }
    static navigationOptions = {
        title: 'HiddenConfigures',
    } ;

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    updateProgress(idx){
        let total = content.items.length;
        let newProgress = (idx+1)/total;
        let percentage = (newProgress * 100).toFixed(0);
        this.setState({progress:newProgress,percentage:percentage});
    }

    start(){
        this.setState({started:true})
    }


    render(){
        let {navigate} =this.props.navigation;

        if (this.state.percentage >= 100){
            navigate("SecondPhase");
        }

        if (this.state.started) {
            return (
                <View style={styles.container}>
                    <View style={styles.leftHalf}>
                        <Text style={styles.leftText}>
                            {content.leftCat}
                        </Text>
                    </View>

                    <View style={styles.rightHalf}>
                        <Text style={styles.rightText}>
                            {content.rightCat}
                        </Text>
                    </View>
                    <Flix items={content.items} updateProgress={this.updateProgress.bind(this)}/>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:20}}>{this.state.percentage} %</Text>
                        <ProgressBarAndroid
                            progress={this.state.progress}
                            styleAttr="Horizontal"
                            color="blue"
                            indeterminate={false}
                            style={styles.loadingContainer}/>
                    </View>

                </View>

            );
        }
        else {
            return (
                <View style={styles.textContainer}>
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


                    <Button
                        title="Start phase two"
                        accessibilityLabel="Start Phase two"
                        color="#841584"
                        onPress={this.start.bind(this)}
                        style={{elevation:12,marginTop:40}}/>
                </View>
            );
        }
    }

}

let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#F5FCFF",
        width:width
    },
    leftHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left: -80,
        width:width * .5,
        height:height ,



    },

    rightHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top:-235,
        right: -140,
        width:width * .5,
        height:height ,


    },

    loadingContainer: {
        width: width*.7,
    },

    leftText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    rightText:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    textContainer: {
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
        marginBottom: 40
    },

    hyperlink:{
        color: "#05A5D1",
        textDecorationLine: 'underline',
    }

});