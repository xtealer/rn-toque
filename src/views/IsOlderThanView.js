import React, { useState } from 'react';
import { appColors } from '../styles/GlobalStyles';
import { Image, View, Text, StyleSheet } from 'react-native';
import SafeViewComponent from '../components/SafeViewComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent';

const IsOlderThanView = ({ navigation: { navigate }, route: { params } }) => {
    const [isOlderThan, setIsOlderThan] = useState('');
    if (isOlderThan === 'Y') {
        navigate('Schedule', { ...params, isOlderThan });
    } else if (isOlderThan === 'N') {
        navigate('LastDigit', { ...params, isOlderThan });
    }
    return (<SafeViewComponent>
        <View style={styles.parentViewStyle}>
            <View style={styles.childContainerStyle}>
                <Image source={require('../../assets/old-couple.png')} style={styles.headerLogoStyle} />
                <Text style={styles.headerTextStyle}>¿TIENE 60 AÑOS O MAS?</Text>
                <ButtonGroupComponent leftTitle="SI" leftValue="Y" rightTitle="NO" rightValue="N" setValue={setIsOlderThan} />
            </View>
        </View>
    </SafeViewComponent>);
};

const styles = StyleSheet.create({
    parentViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerLogoStyle: {
        height: 175
    },
    headerTextStyle: {
        color: appColors.textPrimary,
        fontSize: 22,
        marginTop: 30,
        maxWidth: '70%',
        textAlign: 'center'
    },
    childContainerStyle: {
        alignItems: 'center'
    }
});

export default IsOlderThanView;