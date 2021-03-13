import React from 'react' 
import { Text, View, StyleSheet } from 'react-native'

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
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

export default CategoriesScreen