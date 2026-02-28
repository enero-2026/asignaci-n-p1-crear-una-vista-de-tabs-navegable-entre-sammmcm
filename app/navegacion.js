import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function BarraNavegacion() {
    const ruta = useRouter();
    const pestañas = ["Inicio", "Buscar", "Perfil"];

    return (
        <View style={styles.botones}>
            { 
                pestañas.map((nombre) => (
                    <Pressable onPress={() => ruta.push({ pathname: '/detalle', params: { title: nombre } })}
                        key={nombre}
                        style={styles.boton}
                    >
                        <Text style={styles.texto}>{nombre}</Text>
                    </Pressable>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    botones: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
    },
    boton: {
        flex: 1,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdf3d8',
        borderWidth: 1,
        borderColor: '#b4b4b4'
    },
    texto: { 
        color: '#000', 
        fontWeight: 'bold' 
    }
});