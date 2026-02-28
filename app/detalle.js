import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BarraNavegacion from './navegacion';

export default function Detalle() {
    const { title } = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: title });
    }, [title]);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{title}</Text>
            <BarraNavegacion />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    texto: { fontSize: 28, fontWeight: 'bold' }
});