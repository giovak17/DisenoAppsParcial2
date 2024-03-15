import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";

const url = "https://jsonplaceholder.typicode.com/posts"

export default function Post(){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, []);

    const getContent = () => {
        if (isLoading){
            return(
                <View>
                    <Text style={styles.textProps}> Loading data... </Text>
                    <ActivityIndicator size="large" color="green" />
                </View>
            );
        }
        if (error){
            return <Text>{error}</Text>
        }
        return(
            <View>
                <FlatList 
                showsVerticalScrollIndicator={false}
                data = {data}
                renderItem={ ({item}) => (
                    <View>
                        <Text> {item.title} </Text>
                    </View>
                )}
                />
            </View>
        )
    }

    console.log(data);

    return(
        <View>
            {getContent()}
        </View>
    );

    
}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 34,
    }
})


