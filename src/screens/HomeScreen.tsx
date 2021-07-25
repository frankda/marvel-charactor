import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { listCharacters } from '../api/GetMarvel';

interface IHero {
    name: string
}

const HomeScreen = () => {
    const [ heroes, setHeroes ] = useState([]);

    const fetchHeroesData = async () => {
        const res = await listCharacters();
        setHeroes(res.data.results);
    } 

    useEffect(() => {
        fetchHeroesData();
    }, []);

    return (
        <View>
            <FlatList 
                data={heroes}
                renderItem={({item}: {item: IHero}) => <Text style={styles.item}>{item.name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default HomeScreen

