// Import components
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from "../config/config.json"; //api_key, base_url

function StockList() {

    // Create variable (store data) and function (set data)
    const [products, setProducts] = useState([]); // starting value: empty array (argument of useState())

    // useEffect Hook takes 2 arguments: function, empty array
    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
    }, []); // only call Hook once

    // Create list w. Text components from array products w. function map()
    const list = products.map((product, index) => 
        <Text style={styles.listStyle} key={index}>
            { product['name'] }   -  { product['stock'] } st
        </Text>); // map() iterates array, creates new with chosen structure

    // Create View containing variable {list}
    return (
        <View>
            {list}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: '#191919',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    listStyle: {
        fontSize: 18,
        color: '#191919',
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#999",
        backgroundColor: '#fff',
        padding: 8,
    },
});

// Export function as default export
export default function Stock() {
    return (
        <View>
            <Text style={styles.header}>Lagersaldo:</Text>
            <StockList/>
        </View>
    );
}
