import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, Image, ScrollView } from 'react-native'
import { RootStackParamList } from '../../App';
import { IHero } from './HomeScreen';
import Chart, { IChart } from '../components/PieChart';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

export interface IComics {
    name: string,
    resourceURI: string,
}

const ProfileScreen = ({ route }: Props) => {
    const { params }: { params: IHero } = route;

    const chartData: IChart[] = [
        {
            name: 'Comics',
            count: params.comics.available
        },
        {
            name: 'Series',
            count: params.series.available
        },
        {
            name: 'Stories',
            count: params.stories.available
        },
        {
            name: 'Events',
            count: params.events.available
        }
    ]

    const renderComicsList = () => {
        return (
            params.comics.items.map((item) => {
                return  <Text style={styles.comicsName} key={item.name}>{item.name}</Text>
            })
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.thumbnail} 
                source={{uri: `${params.thumbnail.path}.${params.thumbnail.extension}`}} 
            />
            <Text style={styles.title}>{params.name}</Text>
            <Text style={styles.description}>{params.description ? params.description : 'No available description'}</Text>

            <Chart
                chartData={chartData}
            />

            <Text style={styles.sectionTitle}>Comics they’ve appeared in</Text>
            {renderComicsList()}
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    thumbnail: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 24
    },
    description: {
        fontSize: 18,
        marginBottom: 24
    },
    sectionTitle: {
        fontSize: 24,
        marginBottom: 12
    },
    comicsName: {
        textAlign: 'center'
    }
});
