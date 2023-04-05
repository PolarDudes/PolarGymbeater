
import { View, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text onPress={() => navigation.goBack()}>Home</Text>
        </View>
    );
}