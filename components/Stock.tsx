// Import components
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
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
    const list = products.map((product, index) => <Text key={index}>{ product.name } - { product.stock }</Text>); // map() iterates array, creates new with chosen structure

    // Create View containing variable {list}
    return (
        <View>
            {list}
        </View>
    );
}

// Export function as default export
export default function Stock() {
    return (
        <View>
            <Text style={{color: '#333', fontSize: 24}}>Lagerförteckning</Text>
            <StockList/>
        </View>
    );
}
