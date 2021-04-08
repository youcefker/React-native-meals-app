import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import CategriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android"? Colors.primaryColor: "white"
        },
        headerTintColor: Platform.OS === "ios"? Colors.primaryColor: "white"
    }
}

const MealsNavigator = createStackNavigator({
    Categories: CategriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, defaultStackNavOptions)

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, defaultStackNavOptions)

const tabScreenConfig =  {Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Colors.primaryColor
}},
Favorites: {screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.accentColor
}}
} 

const MealsFavTabNavigator = Platform.OS === 'android'? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: Colors.accentColor,
    shifting: true
}): createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        tabBar
    }})

const MealsDrawerNavigator = createDrawerNavigator({
    Meals: MealsFavTabNavigator,
    Filters: FiltersNavigator
})

export default createAppContainer(MealsDrawerNavigator)
