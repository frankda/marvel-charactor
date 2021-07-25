import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/ProfileScreen';

interface IListItemProps {
    img: string,
    name: string
}

const ListItem = (props: IListItemProps) => {
    return (
        <View>
            <Pressable 
                style={styles.container}
                onPress={() => {
                    
                    // navigation.navigate('Profile')
                }}
            >
                <Image 
                    style={styles.thumbnail} 
                    source={{uri: props.img}} 
                />
                <Text style={styles.title}>{props.name}</Text>
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
        borderStyle: 'solid'
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 3
    },
    title: {
        fontSize: 18,
        flex: 1,
        marginLeft: 24
    }
})
