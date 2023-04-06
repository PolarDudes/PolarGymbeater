import React from 'react';
import { View, Text } from 'react-native';
import { PolarContext } from '../context/context';

export default function Loading({ children }) {
    const { loading } = React.useContext(PolarContext)

    return (
        <>
            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text>Loading...</Text>
                </View>
                : children}
        </>
    );
}