import React from 'react' 
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: props.id
                }
            })
        }}>
                    <View>
                        <Text>{props.title}</Text>
                    </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoryGridTile