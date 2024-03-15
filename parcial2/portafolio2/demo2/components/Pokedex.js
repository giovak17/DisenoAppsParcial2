import { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, Image, StyleSheet, FlatList } from "react-native";

const url = "https://pokeapi.deno.dev/pokemon";

export default function Pokedex(){

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setIsLoading(false);
            setData(result);
        }, error => {
            setIsLoading(false);
            setError(error);
        })
    } , []);

    console.log(data)

    const getContent = () => {
        if(isLoading){
            return(
                <View>
                    <Text style={styles.textProps}> Loading Data... </Text>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        if(error){
            return <Text style={styles.text}> {error} </Text>
        }
        return(
            <View>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data = {data}
                    renderItem={ ({item}) => (
                        <View>
                            <Image style={styles.image} source={{uri: item.imageUrl}} />
                            <Text style={styles.text}>Name: {item.name} </Text>
                            <Text>Genus: {item.genus}  </Text>
                            <Text>Type: {item.types} </Text>
                            <Text>Description: {item.description} </Text>
                            <Text>Stats hp: {item.stats.HP} </Text>
                            <Text>Location: {item.locations} </Text>
                        </View>
                    )}
                />
            </View>
        );
    };
    
    return(
        <View>
            {getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 36,
    },
    text: {
        fontSize: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
})



