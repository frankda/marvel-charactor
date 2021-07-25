import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { listCharacters } from '../api/GetMarvel';
import ListItem from '../components/ListItem';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface IHero {
    id: number,
    name: string,
    thumbnail: {
        path: string,
        extension: string
    },
    onPress: Function
}

const HomeScreen = ({ navigation }: { navigation: ProfileScreenNavigationProp }) => {
    const [ heroes, setHeroes ] = useState([] as IHero[]);
    const [ filteredHeroes, setFilteredHeroes ] =useState([] as IHero[]);
    const [ searchCopy, setSearchCopy ] = useState('');

    const fetchHeroesData = async () => {
        const res = await listCharacters();
        setHeroes(res.data.results);
    }
    
    useEffect(() => {
        fetchHeroesData();
    }, []);

    // update filtered results according to search text
    // whenever heroes list or search text are updated
    useEffect(() => {
        handleSearch(searchCopy);
    }, [heroes, searchCopy])
    
    const changeToProfileScreen = () => {
        navigation.navigate('Profile', { name: 'hi' })
    }

    const handleSearch = (text: string) => {
        setSearchCopy(text);
        if (searchCopy) {
            const filteredHeroes = heroes.filter((hero: IHero) => {
                return hero.name.includes(searchCopy);
            });
            setFilteredHeroes(filteredHeroes);
        } else {
            setFilteredHeroes(heroes);
        }
    }

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="Search for your hero!"
                onChangeText={text => handleSearch(text)}
                defaultValue={searchCopy}
            />
            <Text style={styles.resultsCount}>{filteredHeroes.length} results</Text>
            <FlatList 
                data={filteredHeroes}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({item}: {item: IHero}) => 
                            <ListItem
                                name={item.name}
                                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                onPress={changeToProfileScreen}
                            />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        paddingHorizontal: 12,
        borderRadius: 3,
        backgroundColor: 'white'
    },
    resultsCount: {
        marginLeft: 16
    }
  });

export default HomeScreen

