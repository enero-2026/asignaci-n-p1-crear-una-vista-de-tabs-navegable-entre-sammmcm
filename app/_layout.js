import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#90e189',
                    
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
    );
}