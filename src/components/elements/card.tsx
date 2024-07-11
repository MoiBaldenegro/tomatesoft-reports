// imports
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../../../app.styles';

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {item.period}
      </Text>
    </View>
  );
}

export function AnimatedCard({ item, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
    <Text style={styles.text}>{item.period}</Text>
  </Animated.View>
  );
}

       
