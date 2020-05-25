import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = ()=>{
const name = "My name is Sourangshu";
const greeting= "Getting started with React native";
const jsxReturn = (<View>
                      <Text style={styles.textStyle}>this is the component screen</Text>
                      <Text style={styles.greetStyle}>{greeting} </Text>
                      <Text style={styles.textStyle}>{name} </Text>
                  </View>);
    return (jsxReturn);
}; //this is how to create component

const styles = StyleSheet.create({
    textStyle: { fontSize: 20},
    greetStyle: {fontSize: 45}
});


export default ComponentsScreen;

