import React from 'react'
import { appColors } from '../styles/GlobalStyles';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenericButtonComponent = ({ title, action }) => {
    return (<TouchableOpacity style={styles.btnStyle} onPress={action ? (event) => action(event) : null}>
        <Text style={styles.btnTextStyle}>{title}</Text>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: appColors.backgroundPrimary,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 20,
        padding: 15
    },
    btnTextStyle: {
        color: appColors.textSecondary,
        fontSize: 18,
        textAlign: 'center'
    }
});

export default GenericButtonComponent;