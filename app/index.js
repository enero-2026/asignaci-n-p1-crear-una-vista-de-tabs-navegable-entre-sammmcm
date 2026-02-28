import { View, StyleSheet } from 'react-native';
import BarraNavegacion from './navegacion';

export default function Index() {
    return (
        <View style={styles.container}>
            <BarraNavegacion />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }
});