import React from 'react' 
import { Text, View, Button, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CATEGORIES } from '../data/dummy-data'
import { MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const renderMealItem = (itemData) => {
        return (<View><Text>{itemData.item.title}</Text></View>)
    }
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return (
        <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item, index) => item.id}/>
    )
}


export default CategoryMealsScreen