import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors'

const Number = props => {
    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.number}>
                { props.children }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
{
    summaryContainer: {
        marginVertical: 10,
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 20,
        color: Colors.secondary
    }
})

export default Number;