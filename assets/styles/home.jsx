import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',  // Replace with your desired background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp_layout: {
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row'
    },
    navBar: {
        backgroundColor: '#fff'
    },
    navText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },  
    navBarItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        height: 50,
        gap: 15
    },
      navBarItemPressed: {
        backgroundColor: 'red', // Color when pressed
    },
});

export default styles