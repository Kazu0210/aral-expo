import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, registerCallableModule } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import styles from '../../assets/styles/home';

export default function app() {
    return (
        <View style={styles.temp_layout}>
            <StatusBar hidden={false} barStyle="dark-content" />
            <SQLiteProvider databaseName="moonleaf_db.db" assetSource={{ assetId: require('../../assets/moonleaf_db.db') }}>
                <View>

                </View>
            </SQLiteProvider>
        </View>
    )
}