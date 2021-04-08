import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import { MEALS } from '../data/dummy-data'
const favoritesScreen = (props) => {
    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}

favoritesScreen.navigationOptions = (navigationData) => {
    return { 
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item  title='menu' iconName='ios-menu' iconSize={23} onPress={() => {
                    navigationData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default favoritesScreen