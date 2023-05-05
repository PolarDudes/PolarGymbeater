import React, { Component } from "react";
import { Animated } from "react-native";

class HeartbeatAnimation extends Component {
  state = {
    pulse: new Animated.Value(1),
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.pulse, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.pulse, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
      ])
    ).start();
  }

  render() {
    const { style, children } = this.props;
    const pulseStyle = {
      transform: [{ scale: this.state.pulse }],
    };
    return (
      <Animated.View style={[style, pulseStyle]}>{children}</Animated.View>
    );
  }
}

export default HeartbeatAnimation;
