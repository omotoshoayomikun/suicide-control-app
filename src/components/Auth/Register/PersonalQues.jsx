import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { BackBtn, Btn } from "../../Forms/Btn"
import GlobalStyle from "../../../utils/GlobalStyle"
import { Input } from '../../Forms/Input'
import { ScrollView } from 'react-native-gesture-handler'

const { headerText, flex_row, flex1, gap10, mb_10, flex1_5, mt_40, containerScroll, mb_20 } = GlobalStyle

function Sign_Up({ navigation }) {

    const [value, setValue] = useState({})

    const Inputs = [
        {
            id: 1,
            placeholder: 'First Name',
        },
        {
            id: 2,
            placeholder: 'Last Name',
        },
        {
            id: 3,
            placeholder: 'Phone Number',
        },
        {
            id: 4,
            placeholder: 'Email',
        },
        {
            id: 5,
            placeholder: 'Gender',
        },
        {
            id: 6,
            placeholder: 'State',
        },
        {
            id: 7,
            placeholder: 'Location',
        }
    ]

    const handleContinue = () => {
        navigation.navigate('NextOfKinQues')
    }

    return (
        <View style={[flex1]}>
            <ScrollView contentContainerStyle={[containerScroll]}>
                <View>
                    <BackBtn handlePress={() => navigation.goBack()} />
                </View>
                <View>
                    <View style={[mb_20]}>
                        <Text style={[headerText]}>Let's get</Text>
                        <Text style={[headerText]}>you started</Text>
                    </View>
                    <View style={[gap10, mb_10]}>
                        {
                            Inputs.map((input) => (
                                <View key={input.id} style={[flex1]}>
                                    <Input placeholder={input.placeholder} />
                                </View>
                            )).slice(0, 4)
                        }
                    </View>
                    <View style={[gap10, mb_10]}>
                        {
                            Inputs.map((input) => (
                                <View key={input.id} style={[flex1]}>
                                    <Input placeholder={input.placeholder} />
                                </View>
                            )).slice(4, 5)
                        }
                    </View>
                    <View style={[gap10, mb_10]}>
                        {
                            Inputs.map((input) => (
                                <View key={input.id} style={[flex1]}>
                                    <Input placeholder={input.placeholder} />
                                </View>
                            )).slice(5, 6)
                        }
                        {
                            Inputs.map((input) => (
                                <View key={input.id} style={[flex1]}>
                                    <Input placeholder={input.placeholder} />
                                </View>
                            )).slice(6, 7)
                        }
                    </View>
                </View>
                <View style={[mt_40]}>
                    <Btn text='Continue' handlePress={handleContinue} />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between', // Content will be at the bottom
        padding: 16, // Adjust padding as needed
    },
});

export default Sign_Up
