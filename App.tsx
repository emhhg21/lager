// Components
import { StatusBar } from 'expo-status-bar'; // statusbar for developing
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // avoid content in notch

// Images
import logo from './assets/logo.png'; // logo

// Own components
import Stock from './components/Stock'; // stock

// // Comment in expo log
// console.log("This is displayed in the expo log!");

// Immediately export function component, returning React element written in JSX
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.base}>
                <Image source={logo} style={{ width: 380, height: 220, marginBottom: 30 }} />
                <Stock/>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

// Style app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    base: {
        flex: 1,
        backgroundColor: '#fafafa',
        color: '#191919',
        paddingLeft: 12,
        paddingRight: 12
    }
});
