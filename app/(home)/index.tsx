import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, registerCallableModule } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import styles from '../../assets/styles/home';
import { Image, ScrollView } from 'react-native';
import { useState } from 'react';


export default function app() {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    return (
        <ScrollView>
            <View style={styles.temp_layout}>
                <StatusBar hidden={false} barStyle="dark-content" />
                <SQLiteProvider databaseName="moonleaf_db.db" assetSource={{ assetId: require('../../assets/moonleaf_db.db') }}>
                    <View style={styles.navBar}>
                        <View> {/* logo container */}
                            <Image 
                                source={require('../../assets/images/moonleaf-logo.png')}
                                style={{ width: 200, height: 100, objectFit: 'contain' }}
                                />
                        </View>

                        <Link href="/(home)/viewData">
                            <TouchableOpacity 
                                    style={[styles.navBarItem, isPressed && styles.navBarItemPressed]} 
                                    onPressIn={handlePressIn} 
                                    onPressOut={handlePressOut}
                                >
                                <Image
                                    source={require('../../assets/images/nav-icons/home.png')}
                                    style={{ width: 25, height: 25, objectFit: 'contain', marginLeft: 15 }}
                                />
                                <Text style={styles.navText}>Home</Text>
                            </TouchableOpacity>
                        </Link>

                        <TouchableOpacity style={styles.navBarItem}>
                            <Image
                                source={require('../../assets/images/nav-icons/home.png')}
                                style={{ width: 25, height: 25, objectFit: 'contain', marginLeft: 15 }}
                            />
                            <Text style={styles.navText}>Inventory</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navBarItem}>
                            <Image
                                source={require('../../assets/images/nav-icons/home.png')}
                                style={{ width: 25, height: 25, objectFit: 'contain', marginLeft: 15 }}
                            />
                            <Text style={styles.navText}>Orders</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>This is a text for the main container</Text>
                    </View>
                </SQLiteProvider>
            </View>
        </ScrollView>
    )
}