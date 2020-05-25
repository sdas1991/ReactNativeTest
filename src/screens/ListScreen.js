import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen= () =>{
        const friends = [
            {name: "friend #1" , key: "1" },
            {name: "friend #2" , key: "2"},
            {name: "friend #3" , key: "3"},
            {name: "friend #4" , key: "4"},
            {name: "friend #5" , key: "5"}
        ];
        return (<FlatList
                    keyExtractor={(friend)=>(friend.key)}
                    data={friends}
                    renderItem= {({item}) => { return (<Text style={styles.textStyle}>{item.name}</Text>)}}
                    />);
};

const styles = StyleSheet.create({
        textStyle:{marginVertical: 50}
});

export default ListScreen;