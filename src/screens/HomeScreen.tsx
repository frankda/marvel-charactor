import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, ScrollView, FlatList, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { listCharacters } from '../api/MarvelApi';
import ListItem from '../components/ListItem';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

// interface for returned hero data
export interface IHero {
    id: number,
    name: string,
    resourceURI: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    },
    comics: object,
}

const HomeScreen = ({ navigation }: Props) => {
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
    
    const changeToProfileScreen = (item: IHero) => {
        const profileDetail = {
            name: item.name,
            comics: item.comics,
            description: item.description
        }
        navigation.navigate('Profile', profileDetail)
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
        <ScrollView>
            <TextInput
                style={styles.textInput}
                placeholder="Search for your hero!"
                onChangeText={text => handleSearch(text)}
                defaultValue={searchCopy}
            />
            <Text style={styles.resultsCount}>{filteredHeroes.length} results</Text>
            <FlatList 
                nestedScrollEnabled
                data={filteredHeroes}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({item}: {item: IHero}) => 
                            <ListItem
                                heroDetails={item}
                                onPress={changeToProfileScreen}
                            />
                }
            />
        </ScrollView>
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

