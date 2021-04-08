import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
const filtersScreen = (props) => {
    return (
        <View>

        </View>
    )
}

filtersScreen.navigationOptions = (navigationData) => {
    return { 
        headerTitle: 'Filters',
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

export default filtersScreen