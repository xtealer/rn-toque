import React, { useState } from 'react';
import { appColors } from '../styles/GlobalStyles';
import { Image, View, Text, StyleSheet } from 'react-native';
import SafeViewComponent from '../components/SafeViewComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent';

const IsDisabledView = ({ navigation: { navigate }, route: { params } }) => {
    const [isDisabled, setIsDisabled] = useState('');
    if (isDisabled === 'Y') {
        navigate('Schedule', { ...params, isDisabled });
    } else if (isDisabled === 'N') {
        navigate('IsOlderThan', { ...params, isDisabled });
    }
    return (<SafeViewComponent>
        <View style={styles.parentViewStyle}>
            <View style={styles.childContainerStyle}>
                <Image source={require('../../assets/disabled-person.png')} style={styles.headerLogoStyle} />
                <Text style={styles.headerTextStyle}>¿TIENE ALGUNA DISCAPACIDAD?</Text>
                <ButtonGroupComponent leftTitle="SI" leftValue="Y" rightTitle="NO" rightValue="N" setValue={setIsDisabled} />
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

export default IsDisabledView;