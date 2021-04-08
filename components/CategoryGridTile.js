import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'

const categoryGridTile = (props) => {
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return(
        <View style={styles.gridItem}>
            <TouchableCmp  style={{flex: 1}} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.categoryText} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden': 'visible',
        elevation: 5
    },
    container: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:2, height: 1},
    },
    categoryText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})

export default categoryGridTile