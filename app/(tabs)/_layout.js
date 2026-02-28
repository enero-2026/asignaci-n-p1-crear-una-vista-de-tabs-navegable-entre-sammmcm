import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#44BBA4' }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="buscar"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="config" 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="perfil" 
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={"black"} />
                    )
                }} 
            />
        </Tabs>
    );
}