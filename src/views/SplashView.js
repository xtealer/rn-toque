import React, { useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';

const SplashView = ({ navigation }) => {
    const insets = useSafeArea();

    //* redirect to main screen
    useEffect((params) => {
        setTimeout(() => navigation.dispatch({
            ...StackActions.replace('Menu'),
            source: undefined,
        }), 3000);
    }, []);

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {Platform.OS === 'ios' ? < StatusBar translucent={false} barStyle="dark-content" /> : undefined}
            <View style={styles.childContainer}>
                <Image style={styles.logoStyle} source={require("../../assets/toque-logo.png")} />
            </View>
            <View style={styles.footerStyle}>
                <Text style={styles.footerTextStyle}>by AiUsTk</Text>
                <Text style={styles.footerTextVersion}>v1.2.7</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    childContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerStyle: {
        paddingBottom: 30
    },
    footerTextVersion: {
        color: '#999',
        textAlign: 'center'
    },
    footerTextStyle: {
        color: '#4A739F',
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 5,
    },
    parentContainer: {
        flex: 1
    },
    logoStyle: {
        marginTop: 30,
        height: 256,
        width: 256
    }
});

export default SplashView;