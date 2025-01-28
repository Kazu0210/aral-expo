import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react'; // Import useState for state management
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

export default function ViewData() {
    const db = useSQLiteContext(); // Make sure the hook is called at the top level of the component
    
    interface Item {
        item_name: string;
        item_id: number;
    }
    
    // State to store the fetched items (array of objects with item_name and item_id)
    const [items, setItems] = useState<Item[]>([]);

    const viewDataFromDB = async () => {
        try {
            const result: Item[] = await db.getAllAsync('SELECT * FROM items');
            
            // Map over the result and extract the item_name and item_id
            const itemNames = result.map((row: Item) => ({
                item_name: row.item_name,
                item_id: row.item_id
            }));

            // Update state with the fetched items (including both item_name and item_id)
            setItems(itemNames);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    function showItemID (itemID:number, itemName:string) {
        console.log(`Clicked item id: ${itemID} Item name: ${itemName}`)
    }

    return (
        <View style={styles.container}>
            <Text>View Data</Text>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={viewDataFromDB}>
                <Text>Press to show data</Text>
            </TouchableOpacity>
    
            {/* Display item names and item ids */}
            {items.length > 0 ? (
                items.map((item) => (
                    <TouchableOpacity
                        key={item.item_id}
                        onPress={() => showItemID(item.item_id, item.item_name)} // Correctly passing a function
                        style={styles.TouchableOpacity}
                    >
                        <Text style={{ fontWeight: 'bold' }}>{`${item.item_id}.`} <Text style={{ fontWeight: 'normal' }}>{item.item_name}</Text></Text>
                    </TouchableOpacity>
                ))
            ) : (
                <Text
                    style={{
                        backgroundColor: 'red',
                        padding: 10,
                        borderRadius: 5,
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    No data available
                </Text>
            )}
        </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
});
