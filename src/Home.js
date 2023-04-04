import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from '../api/router';
import { useEffect, useState } from 'react';

export default function App() {
    const [ userData, setUserData ] = useState([]);
    const [ exerciseData, setExerciseData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        let didCancel = false;

        if (!didCancel) {
            Router.getUser()
                .then(response => setUserData(response))
                .catch(error => console.error(error))
                .finally(() => { setLoading(false) });
        }

        return () => didCancel = true;
    }, [])

    useEffect(() => {
        let didCancel = false;

        if (!didCancel) {
            Router.getExercises()
                .then(response => setExerciseData(response))
                .catch(error => console.error(error))
                .finally(() => { setLoading(false) });
        }

        return () => didCancel = true;
    }, [])

    return (
        <>
            {loading
                ?
                <View style={styles.container}>
                    <Text >Loading...</Text>
                </View>
                : (
                    <View style={styles.container}>
                        <Text>Home</Text>
                        {/* <Esimerrki props={data} /> */}
                        <StatusBar style="auto" />
                    </View>
                )}
        </>
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
