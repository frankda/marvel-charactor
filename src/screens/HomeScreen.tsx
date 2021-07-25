import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { listCharacters } from '../api/GetMarvel';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../components/ListItem';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface IHero {
    name: string,
    thumbnail: {
        path: string,
        extension: string
    }
}

const HomeScreen = ({ navigation }: { navigation: ProfileScreenNavigationProp }) => {
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
            <Button title="hi" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
            <FlatList 
                data={heroes}
                renderItem={
                    ({item}: {item: IHero}) => 
                            <ListItem
                                name={item.name}
                                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            />
                }
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

