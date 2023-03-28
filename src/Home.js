import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import router from '../api/router';

export default function App() {
    info = router.get_user_information();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>{info}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
