import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = ()=>{
    return <Text style={styles.textStyle}>this is the component screen</Text>;
}; //this is how to create component

const styles = StyleSheet.create({
    textStyle: { fontSize: 20}
});

export default ComponentsScreen;

