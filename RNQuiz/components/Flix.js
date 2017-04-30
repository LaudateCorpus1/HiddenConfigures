/**
 * Created by philipbed813 on 4/26/17.
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Animated, PanResponder, Dimensions} from 'react-native';
import clamp from 'clamp';

const People = [
    'red',
    'green',
    'blue',
    'purple',
    'orange',
];

let SWIPE_THRESHOLD = 120;

export default class Flix extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY(),
            enter: new Animated.Value(0.5),
            items: this.props.items,
            item: this.props.items[0],
            error:false,
        }
    }

    _goToNextPerson() {
        let currentItemIdx = this.state.items.indexOf(this.state.item);
        let newIdx = currentItemIdx + 1;

        this.setState({
            item: this.state.items[newIdx > this.state.items.length - 1 ? 0 : newIdx]
        });
    }

    componentDidMount() {
        this._animateEntrance();
    }

    _animateEntrance() {
        Animated.spring(
            this.state.enter,
            { toValue: 1, friction: 8 }
        ).start();
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: (evt,gesture) => true,
            onMoveShouldSetPanResponderCapture: (evt,gesture) => true,

            onPanResponderGrant: (evt, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
            ]),

            onPanResponderRelease: (e, {vx, vy}) => {
                this.state.pan.flattenOffset();
                var velocity;

                if (vx >= 0) {
                    velocity = clamp(vx, 3, 5);
                } else if (vx < 0) {
                    velocity = clamp(vx * -1, 3, 5) * -1;
                }

                // swiped left and shouldve swiped right
                if (this.state.pan.x._value  < 0 && this.state.item.direction > 0 ){
                    this.setState({error:true});
                }
                // swiped right and should swiped left
                else if (this.state.pan.x._value   > 0 && this.state.item.direction < 0 ){
                    this.setState({error:true});
                }



                if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
                    Animated.decay(this.state.pan, {
                        velocity: {x: velocity, y: vy},
                        deceleration: 0.98
                    }).start(this._resetState.bind(this))
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }

                // this.setState({error:false});
            }
        });
    }

    _resetState() {
        this.state.pan.setValue({x: 0, y: 0});
        this.state.enter.setValue(0);

        if (!this.state.error) {
            let currentItemIdx = this.state.items.indexOf(this.state.item);
            this._goToNextPerson();
            this.props.updateProgress(currentItemIdx);
        }
        this._animateEntrance();
        this.setState({error:false});
    }

    render() {
        let { pan, enter, } = this.state;

        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
        let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});
        let scale = enter;

        let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

        let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
        let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
        let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity};

        let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
        let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
        let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity};

        let nopeText = this.state.error ?
                            <Animated.View style={styles.nope}>
                                <Text style={[styles.nopeText]}>Nope!</Text>
                            </Animated.View>
                        : null;


        return (
            <View style={styles.container}>
                <Animated.View style={[styles.card, animatedCardStyles]} {...this._panResponder.panHandlers}>
                    <Text style={styles.questionText}>{this.state.item.topic}</Text>
                </Animated.View>
                {nopeText}
                {/*<Animated.View style={[styles.nope, animatedNopeStyles]}>*/}
                    {/*<Text style={styles.nopeText}>Nope!</Text>*/}
                {/*</Animated.View>*/}
                {/*<Animated.View style={[styles.yup, animatedYupStyles]}>*/}
                    {/*<Text style={styles.yupText}>Yup!</Text>*/}
                {/*</Animated.View>*/}
            </View>
        );
    }
}
let {height, width} = Dimensions.get('window');
let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        position: 'absolute',
    },
    card: {
        width: 200,
        height: 200,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        // width:width * .5,
        // height:height * .5,

        elevation: 10,
        borderRadius: 100
    },
    yup: {
        borderColor: 'green',
        borderWidth: 2,
        position: 'absolute',
        padding: 20,
        bottom: 20,
        borderRadius: 5,
        right: 20,
    },
    yupText: {
        fontSize: 16,
        color: 'green',
    },
    nope: {
        borderColor: 'red',
        borderWidth: 2,
        position: 'absolute',
        bottom: -110,
        padding: 20,
        borderRadius: 5,
        left: 140,
    },
    nopeText: {
        fontSize: 16,
        color: 'red',
    },

    questionText: {
        fontSize: 30,
        textAlign:'center'
    }
});



