import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { Card } from '../components/Forms/Card'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Dashboard() {
    const { flex1, relative, headerText, White, mb_20, padding_20, justify_between, fz16, mr_10, flex_row, mb_10 } = GlobalStyle
    return (
        <View style={[flex1, relative]}>
            <StatusBar
                backgroundColor="#701a75"
            />
            <View style={styles.topBg}></View>
            <View style={padding_20}>
                <Text style={[headerText, mb_20, { color: White, fontSize: 20, }]}>Welcome!</Text>
                <Text style={[headerText, mb_20, { color: White, fontSize: 30, marginTop: -20 }]}>Ayomikun</Text>
                <Card>
                    <View>
                        <View style={[flex_row, justify_between]}>
                            <View style={[flex_row, mb_10]}>
                                <View style={[mr_10]}>
                                    <Text>
                                        <FontAwesome5 name='user-alt' size={18} color='#701a75' />
                                    </Text>
                                </View>
                                <Text style={[]}> Omotosho Ayomikun</Text>
                            </View>
                            <View>
                                <FontAwesome5 name='pen' size={18} color='#701a75' />
                            </View>
                        </View>
                        <View style={[flex_row, mb_10]}>
                            <View style={[mr_10]}>
                                <Text>
                                    <MaterialCommunityIcons name='gmail' size={18} color='#701a75' />
                                </Text>
                            </View>
                            <Text style={[]}>omotoshoayomikun@gmail.com</Text>
                        </View>
                        <View style={[flex_row, mb_10]}>
                            <View style={[mr_10]}>
                                <Text>
                                    <FontAwesome5 name='phone-alt' size={18} color='#701a75' />
                                </Text>
                            </View>
                            <Text style={[]}>09054544641</Text>
                        </View>
                        <View style={[flex_row, mb_10]}>
                            <View style={[mr_10]}>
                                <Text>
                                    <FontAwesome5 name='home' size={18} color='#701a75' />
                                </Text>
                            </View>
                            <Text style={[]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, labore!</Text>
                        </View>
                    </View>

                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBg: {
        width: '100%',
        height: 190,
        backgroundColor: '#701a75',
        position: 'absolute',
        top: 0,
    }
})

export default Dashboard
