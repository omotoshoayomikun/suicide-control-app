import { StyleSheet, TextInput, View } from "react-native"
import GlobalStyle from "../../utils/GlobalStyle"

export const Input = (props) => {
    const { Purple } = GlobalStyle
    return (
        <View style={styles.container}>
            <TextInput
                // onChangeText={(value) => props.onChangeText(value)}
                placeholder={props.placeholder}
                style={styles.input}
                secureTextEntry={props.secure === true ? true : false}
                selectionColor={'#701a75'}
                cursorColor={'#701a75'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        backgroundColor: '#0E0E240D',
        borderWidth: 2,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        // height: 50,
        padding: 12.5,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
    }
})

