import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ProfileScreen = () => {
    return (
        <View>
            <FlatList 
                data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
