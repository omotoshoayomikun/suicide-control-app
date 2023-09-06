import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { BackBtn, Btn } from "../../Forms/Btn"
import GlobalStyle from "../../../utils/GlobalStyle"
import { Input } from '../../Forms/Input'

const { container, mt_40, mb_10, flex1 } = GlobalStyle
function PasswordSet({ navigation }) {

    const [value, setValue] = useState({})

    const Inputs = [
        {
            id: 1,
            placeholder: 'password',
            secure: true
        },
        {
            id: 2,
            placeholder: 'comfirm password',
            secure: true
        },
    ]

    const handleContinue = () => {

    }



    return (
        <View style={[container,]}>
            <View>
                <BackBtn handlePress={() => navigation.goBack()} />
            </View>
            <View style={[flex1]}>
                <View>
                    <Text>Set your</Text>
                    <Text>password</Text>
                </View>
                {
                    Inputs.map((input) => (
                        <View key={input.id} style={[mb_10]}>
                            <Input placeholder={input.placeholder} secure={input.secure} />
                        </View>
                    ))
                }
            </View>
            <View style={[mt_40]}>
                <Btn text='Finish Setup' handlePress={handleContinue} />
            </View>
        </View>
    )
}

export default PasswordSet
