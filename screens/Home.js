import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#333',
        textAlign: 'center'
    }

})
export default Home