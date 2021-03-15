import React from 'react' 
import { FlatList, StyleSheet} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile color={itemData.item.color} title={itemData.item.title} onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: props.id
                }
            })
            }}/>
            )
    }
    return (
        <FlatList keyExtractor={(item,index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
}
const styles = StyleSheet.create({
    screen : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default CategoriesScreen