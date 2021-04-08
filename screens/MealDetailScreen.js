import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
const mealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId')
    const displayedMeal = MEALS.find(meal => meal.id = mealId)
    return(
        <View style={styles.screen}>
            <Text>{displayedMeal.title}</Text>
        </View>
    )
}

mealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const displayedMeal = MEALS.find(meal => meal.id = mealId)
    return {
        headerTitle: displayedMeal.title,
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='favorite' iconName='ios-star' onPress={() => {
                console.log('you made me a favorite')
            }} />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default mealDetailScreen