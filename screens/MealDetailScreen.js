import React from 'react' 
import { Text, View, StyleSheet } from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailScreen