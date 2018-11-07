import {Image, StyleSheet} from 'react-native';
import React from 'react';


export default class ImageApp extends React.PureComponent {
    render() {
        return (
            <Image 
                source={require('../../../assets/dummy/img/1.png')}
                style={styles.container}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
})