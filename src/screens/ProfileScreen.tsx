import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route }: Props) => {
    return (
        <View>
            <Image
                style={styles.thumbnail} 
                source={{uri: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg'}} 
            />
            <Text>{route.params.name}</Text>
            <Text>{route.params.description}</Text>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumbnail: {

    }
})
