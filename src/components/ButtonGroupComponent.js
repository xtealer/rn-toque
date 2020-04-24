import React from 'react';
import { appColors } from '../styles/GlobalStyles';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ButtonGroupComponent = ({ leftTitle, rightTitle, leftValue, rightValue, setValue }) => {
    return (<View style={styles.btnContainerStyle}>
        <TouchableOpacity style={styles.btnStyle} onPress={(e) => setValue(leftValue)}>
            <Text style={styles.btnTextStyle}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnStyle, marginLeft: 20 }} onPress={(e) => setValue(rightValue)}>
            <Text style={styles.btnTextStyle}>{rightTitle}</Text>
        </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
    btnContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        maxWidth: '80%'
    },
    btnStyle: {
        backgroundColor: appColors.backgroundPrimary,
        borderRadius: 5,
        flex: 1,
        padding: 15
    },
    btnTextStyle: {
        color: appColors.textSecondary,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ButtonGroupComponent;