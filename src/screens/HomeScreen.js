import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (<View>
    <Text style={styles.text}>helloooo</Text>
    <Button onPress = {()=>props.navigation.navigate('Components')}
    title = "button element" />
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>opacity button</Text>
    </TouchableOpacity>
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
