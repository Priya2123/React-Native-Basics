import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>box Screen 1</Text>
        <Text style={styles.textSecondStyle}>box Screen 2</Text>
        <Text style={styles.textThirdStyle}>box Screen 3</Text>
    </View>
}

//content --> padding --> border --> margin  : BOX MODEL
//flexDirection, alignItems, justifyContent : parent
//flex, alignSelf : child
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-around'
        //alignItems: 'center
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textSecondStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textThirdStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    }
})

export default BoxScreen;