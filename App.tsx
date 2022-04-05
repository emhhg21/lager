// Components
import { StatusBar } from 'expo-status-bar'; // statusbar for developing
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // avoid content in notch

// Images
import warehouse from './assets/warehouse.jpeg'; // image of warehouse

// Own components
import Stock from './components/Stock'; // stock

// Comment in expo log
console.log("This is displayed in the expo log!");

// Immediately export function component, returning React element written in JSX
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Text style={{color: '#33c', fontSize: 42}}>Lager-Appen</Text>
                <Image source={warehouse} style={{ width: 320, height: 240 }} />
                <Stock />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

// Style app
const styles = StyleSheet.create({
    container: {
        flex: 1
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    base: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12
    }
});
