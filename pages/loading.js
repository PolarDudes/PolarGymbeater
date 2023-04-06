import { View, Text } from 'react-native';

export default function Loading({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text onPress={() => navigation.navigate('Home')}>Loading...</Text>
        </View>
    );
}