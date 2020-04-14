import React from 'react';
import { Linking, View, StyleSheet } from 'react-native';
import { appColors } from '../styles/GlobalStyles';
import ImageButtonComponent from '../components/ImageButtonComponent';

const SocialNetworksView = (props) => {
    return (
        <View style={styles.parentView}>
            <View style={{ ...styles.buttonContainerStyle, marginTop: 0 }}>
                <View style={styles.btnLeftWrapperStyle}>
                    <ImageButtonComponent action={(e) => Linking.openURL('https://twitter.com/CSSPanama')} image={require('../../assets/css-logo.png')} />
                </View>
                <View style={styles.btnRightWrapperStyle}>
                    <ImageButtonComponent action={(e) => Linking.openURL('https://twitter.com/MINSAPma')} image={require('../../assets/minsa-logo.png')} />
                </View>
            </View>
            <View style={styles.buttonContainerStyle}>
                <View style={styles.btnLeftWrapperStyle}>
                    <ImageButtonComponent action={(e) => Linking.openURL('https://twitter.com/MinGobPma')} image={require('../../assets/mingob-logo.jpg')} />
                </View>
                <View style={styles.btnRightWrapperStyle}>
                    <ImageButtonComponent action={(e) => Linking.openURL('https://twitter.com/protegeryservir')} image={require('../../assets/policia-logo.png')} />
                </View>
            </View>
            <View style={styles.buttonContainerStyle}>
                <ImageButtonComponent action={(e) => Linking.openURL('https://twitter.com/NitoCortizo')} image={require('../../assets/nito-logo.jpg')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentView: {
        alignItems: 'center',
        backgroundColor: appColors.backgroudSecondary,
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        marginTop: 30
    },
    btnLeftWrapperStyle: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 15
    },
    btnRightWrapperStyle: {
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 15
    }
});

export default SocialNetworksView;