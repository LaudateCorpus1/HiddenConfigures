/**
 * Created by philipbed813 on 5/8/17.
 */
/**
 * Created by Philip Bedward on 5/8/17.
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


import TopicCard from '../components/topicCard';

import Flix from '../components/Flix';

let content =
    {
        leftCat: "Female or Computing",
        rightCat: "Male or Economics",
        items: [
            {topic:"Woman",direction:-1}, {topic:"Daughter",direction:-1}, {topic:"Mother",direction:-1},
            {topic:"Girl",direction:-1}, {topic:"Aunt",direction:-1}, {topic:"Grandma",direction:-1},
            {topic:"Wife",direction:-1},{topic:"IT",direction:-1}, {topic:"Website",direction:-1},
            {topic:"Programming",direction:-1}, {topic:"Code",direction:-1}, {topic:"Laptop",direction:-1},
            {topic:"Processor",direction:-1}, {topic:"Hard Drive",direction:-1},

            {topic:"Man",direction:1}, {topic:"Son",direction:1}, {topic:"Father",direction:1},
            {topic:"Boy",direction:1}, {topic:"Uncle",direction:1}, {topic:"Grandpa",direction:1},
            {topic:"Husband",direction:1},{topic:"Supply",direction:1}, {topic:"Stocks",direction:1},
            {topic:"Demand",direction:1}, {topic:"Inflation",direction:1}, {topic:"Business",direction:1},
            {topic:"Market",direction:1}, {topic:"Profit",direction:1}, {topic:"Sales Consumer",direction:1} ],
    };


export default class FourthScreen extends Component {

    constructor(props){
        super(props);
        content.items = this.shuffle(content.items);
        this.state = {
            progress: 0,
            percentage: 0,
            started: false,
        }
    }

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    static navigationOptions = {
        title: 'Fourth Phase',
    } ;

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
            navigate("LastPhase");
        }

        if (!this.state.started){
            return (<View style={styles.container}>
                <Button
                    title="Start phase four"
                    accessibilityLabel="Start Phase Three"
                    color="#841584"
                    onPress={this.start.bind(this)}
                    style={{elevation:12}}/>
            </View>);
        }
        else{
            return( <View style={styles.container}>
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

            </View>);
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
        backgroundColor:"#DCF2FF",
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
    }



});