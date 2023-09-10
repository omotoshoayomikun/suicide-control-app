import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from "react-native"
import { Input } from "../Forms/Input"
import GlobalStyle from "../../utils/GlobalStyle"
import { BackBtn, Btn } from "../Forms/Btn"
const { container, mb_20, flex1, mt_50, textRight, red, headerText, textCenter } = GlobalStyle;

function Login({ navigation }) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        navigation.navigate('LayoutTabScreen')
    }

    return (
        <View style={[container]}>
            <View>
                <BackBtn handlePress={() => navigation.navigate('Landing')} />
            </View>
            <View style={flex1}></View>
            <View>
                <View style={styles.img_logo}>
                    <Image
                        style={styles.img_logo}
                        source={require('../../../assets/imgs/profile-logo.png')}
                    />
                </View>
                <Text style={[headerText, textCenter, mb_20]}>Login</Text>
                <View style={[mb_20]}>
                    <Input placeholder='Email' />
                </View>
                <View style={[mb_20]}>
                    <Input placeholder='Password' secure={true} />
                </View>
                <View>
                    <Text style={[styles.txt_forget, textRight]} onPress={() => navigation.navigate('ForgetPass')}>Forget Password ?</Text>
                </View>
            </View>
            <View style={[mt_50]}>
                <Btn text='Login' handlePress={handleLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txt1: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat',
        marginBottom: 30,
        fontWeight: '600'
    },
    txt_forget: {
        color: red,
        fontSize: 15,
        fontFamily: 'Montserrat'
    },
    img_logo: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default Login
