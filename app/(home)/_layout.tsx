import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

export default function HomeLayout() {
  return (
    <SQLiteProvider databaseName="moonleaf_db.db" assetSource={{ assetId: require('../../assets/moonleaf_db.db') }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: false }} />
        <Stack.Screen name="insertData" options={{ headerShown: false }} />
        <Stack.Screen name="viewData" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}
