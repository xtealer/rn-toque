import React, { useState } from 'react';
import { appColors } from '../styles/GlobalStyles';
import { Image, View, Text, StyleSheet } from 'react-native';
import SafeViewComponent from '../components/SafeViewComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent';

const Name = ({ navigation: { navigate } }) => {
    const [gender, setGender] = useState('');
    if (gender) {
        navigate('IsDisabled', { gender });
    }
    return (<SafeViewComponent>
        <View style={styles.parentViewStyle}>
            <View style={styles.childContainerStyle}>
                <Image source={require('../../assets/genders.png')} style={styles.headerLogoStyle} />
                <Text style={styles.headerTextStyle}>¿ES USTED?</Text>
                <ButtonGroupComponent leftTitle="HOMBRE" leftValue="M" rightTitle="MUJER" rightValue="F" setValue={setGender} />
                <Text style={styles.textWarningStyle}>* DEBE ESCOGER EL SEXO QUE APARECE EN SU DOCUMENTO DE IDENTIDAD.</Text>
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
    },
    textWarningStyle: {
        color: '#f00',
        fontSize: 12,
        marginTop: 30,
        maxWidth: '80%',
    }
});

export default Name;