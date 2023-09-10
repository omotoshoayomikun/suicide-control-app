import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { BoxCard } from '../components/Forms/Card'

function Help() {
  const { container } = GlobalStyle

  const HelpList = [
    {
      icon: '',
      header: 'Find Help Now',
      text: 'Discorver the resources that can help',
      icon2: '',
    },
    {
      icon: '',
      header: 'Advice',
      text: 'Guidance to help me stay safe',
      icon2: '',
    },
    {
      icon: '',
      header: 'Worried About Someone',
      text: 'Learn more about suicide and how to help',
      icon2: '',
    },
    {
      icon: '',
      header: 'About',
      text: 'About this app and how to use it',
      icon2: '',
    },
    {
      icon: '',
      header: 'Feedback',
      text: 'Get back to use on how to be better',
      icon2: '',
    },
  ]

  return (
    <ScrollView >
      {
        HelpList.map((list, i) => (
          <View key={i}>
            <BoxCard list={list} />
          </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default Help
