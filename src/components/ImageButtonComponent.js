import React from 'react'
import { appColors } from '../styles/GlobalStyles';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const ImageButtonComponent = ({ image, action }) => {
    return (<TouchableOpacity style={styles.btnStyle} onPress={action ? (event) => action(event) : null}>
        <Image source={image} style={styles.btnImageStyle} />
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    btnStyle: {
        alignItems: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColors.backgroundPrimary
    },
    btnImageStyle: {
        borderRadius: 50,
        height: 70,
        width: 70
    }
});

export default ImageButtonComponent;