import {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

export default function ApiBtc(){
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setResponse(result);
                setIsLoading(false);
            }, error => {
                setError(error);
                isLoading(false);
            })
    } , []);

    const getContent = () => {
        if(isLoading){
            return (
                <View>
                    <Text style={styles.textSize}>Loading Data</Text>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
        if(error){
            return <Text>{error}</Text>;
        }

        return (
            <View>
                <Text>BTC to USD | rate: ${response["bpi"]["USD"].rate}</Text>
            </View>
        );
    }

    return(
        <View>
            {getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    textSize: {
        fontSize: 36,
    },
})





