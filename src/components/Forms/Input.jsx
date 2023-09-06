import { StyleSheet, TextInput, View } from "react-native"

export const Input = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                // onChangeText={(value) => props.onChangeText(value)}
                placeholder={props.placeholder}
                style={styles.input}
                secureTextEntry={props.secure === true ? true : false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        backgroundColor: '#f3e8ff',
        borderRadius: 5,
        // height: 50,
        padding: 12.5,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
    }
})

