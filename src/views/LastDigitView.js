import React, { useState } from 'react';
import { appColors } from '../styles/GlobalStyles';
import { Image, View, Picker, Text, StyleSheet } from 'react-native';
import SafeViewComponent from '../components/SafeViewComponent';

const LastDigitView = ({ navigation: { navigate }, route: { params } }) => {
    const [lastDigit, setLastDigit] = useState('');
    if (lastDigit && lastDigit !== "NONE") {
        navigate('Schedule', { ...params, lastDigit });
        setLastDigit('NONE');
    }
    return (<SafeViewComponent>
        <View style={styles.parentViewStyle}>
            <View style={styles.childContainerStyle}>
                <Image source={require('../../assets/id-card.png')} style={styles.headerLogoStyle} />
                <Text style={styles.headerTextStyle}>ULTIMO DIGITO DE CEDULA O PASSAPORTE</Text>
                <View style={styles.dropDownWrapperStyle}>
                    <Picker
                        selectedValue={lastDigit}
                        style={styles.dropDownStyle}
                        onValueChange={(itemValue, itemIndex) => setLastDigit(itemValue)}
                    >
                        <Picker.Item label="DIGITO" value="NONE" />
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                    </Picker>
                </View>
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
        height: 100,
        width: 130
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
    dropDownStyle: {
        height: 50,
        width: 200,
    },
    dropDownWrapperStyle: {
        borderColor: appColors.backgroundPrimary,
        borderStyle: 'solid',
        borderWidth: 2,
        marginTop: 30,
        paddingHorizontal: 10
    }
});

export default LastDigitView;