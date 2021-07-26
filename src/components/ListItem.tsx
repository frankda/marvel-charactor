import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IHero } from '../screens/HomeScreen';

interface IListItemProps {
    onPress: Function,
    heroDetails: IHero
}

const ListItem = ({ heroDetails, onPress }: IListItemProps) => {
    return (
        <View>
            <Pressable 
                style={styles.container}
                onPress={() => {
                    onPress(heroDetails)
                }}
            >
                <Image 
                    style={styles.thumbnail} 
                    source={{uri: `${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`}} 
                />
                <Text style={styles.title}>{heroDetails.name}</Text>
                <Icon name="chevron-right" size={30} color="#000" />
            </Pressable>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        height: 60,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center'
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 3
    },
    title: {
        fontSize: 18,
        flex: 1,
        marginLeft: 24,
    }
})
