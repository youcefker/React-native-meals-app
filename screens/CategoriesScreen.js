import React from 'react' 
import {StyleSheet} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { CATEGORIES } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import CategoryGridTile from '../components/CategoryGridTile'

const categriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
            props.navigation.navigate({routeName:'CategoryMeals', params: {
                categoryId: itemData.item.id
            }})
        }}/>
    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
}

categriesScreen.navigationOptions = (navigationData) => {
    return { 
        headerTitle: 'Meal Categories',
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

export default categriesScreen