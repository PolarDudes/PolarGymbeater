import { View, Text } from 'react-native';

export default function Loading() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text >Loading...</Text>
        </View>
    );
}