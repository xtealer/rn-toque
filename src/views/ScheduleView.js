import React, { useState, useEffect } from 'react';
import { appColors } from '../styles/GlobalStyles';
import { StackActions } from '@react-navigation/native';
import calculateSchedule from '../helpers/calculateSchedule';
import SafeViewComponent from '../components/SafeViewComponent';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScheduleView = ({ navigation: { dispatch }, route: { params } }) => {
    const [days, setDays] = useState('');
    const [local, setIsLocal] = useState(false);
    const [buySchedule, setBuySchedule] = useState('');
    const [transitSchedule, setTransitSchedule] = useState('');

    const retrieveData = async (e) => {
        try {
            setDays(await AsyncStorage.getItem('days'));
            setBuySchedule(await AsyncStorage.getItem('buy'))
            setTransitSchedule(await AsyncStorage.getItem('transit'));
            setIsLocal(true);
        } catch (err) {
            console.log('COULD NOT RETRIEVE', err);
        }
    };

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('days', days);
            await AsyncStorage.setItem('buy', buySchedule);
            await AsyncStorage.setItem('transit', transitSchedule);
        } catch (err) {
            console.log("STORE DATA FAILED", err);
        }
    };

    const navigateHome = async () => {
        if (buySchedule && transitSchedule && days) {
            await storeData();
        }
        dispatch(StackActions.popToTop());
    };

    useEffect((e) => {
        if (!params) {
            if (!local) {
                retrieveData();
            }
        } else if (!days && !buySchedule && !transitSchedule) {
            calculateSchedule({ ...params, setDays, setBuySchedule, setTransitSchedule });
        }
    }, [local, days, buySchedule, transitSchedule]);

    return (<SafeViewComponent>
        <View style={styles.parentViewStyle}>
            <View style={styles.childContainerStyle}>
                <Image source={require('../../assets/schedule.png')} style={styles.headerLogoStyle} />
                {days && buySchedule && transitSchedule ? <View style={styles.scheduleContainer}>
                    <Text style={styles.scheduleTextStyle}><Text style={styles.scheduleLabelStyle}>DIAS:</Text> {days ? days : ''}</Text>
                    <Text style={styles.scheduleTextStyle}><Text style={styles.scheduleLabelStyle}>SALIDA:</Text> {transitSchedule ? transitSchedule : ''}</Text>
                    <Text style={styles.scheduleTextStyle}><Text style={styles.scheduleLabelStyle}>COMPRA:</Text> {buySchedule ? buySchedule : ''}</Text>
                </View> : <Text style={styles.noDataMsgStyle}>SIN HORARIOS GUARDADOS</Text>}
            </View>
            <View style={styles.rowContainerStyle}>
                <TouchableOpacity style={styles.btnStyle} onPress={navigateHome}>
                    <Text style={styles.btnTextStyle}>VOLVER A INICIO</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerMessageContainerStyle}>
                <Text style={styles.footerMessageTextStyle}>LOS DOMINGOS SON PARA LA FAMILIA</Text>
                <Text style={{ ...styles.footerMessageTextStyle, color: appColors.textDangerPrimary }}>ESTE SABADO 11 #QuedateEnCasa</Text>
            </View>
        </View>
    </SafeViewComponent >);
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
    scheduleTextStyle: {
        color: appColors.backgroundPrimary,
        fontSize: 18,
        marginVertical: 10,
        maxWidth: '70%'
    },
    childContainerStyle: {
        alignItems: 'center'
    },
    scheduleContainer: {
        marginTop: 30
    },
    scheduleLabelStyle: {
        color: '#000',
    },
    statusTextStyle: {
        fontSize: 14,
        marginTop: 30
    },
    rowContainerStyle: {
        flexDirection: 'row',
        marginTop: 30,
        maxWidth: '60%'
    },
    btnStyle: {
        backgroundColor: appColors.backgroundPrimary,
        borderRadius: 5,
        flex: 1,
        padding: 20
    },
    btnTextStyle: {
        color: appColors.textSecondary,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    footerMessageTextStyle: {
        color: appColors.textPrimary,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        textAlign: 'center'
    },
    footerMessageContainerStyle: {
        alignItems: 'center',
        marginTop: 30
    },
    noDataMsgStyle: {
        paddingTop: 30
    }
});

export default ScheduleView;