import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import AppHeader from './components/AppHeader'
import Stories from './components/Stories'
import ChatList from './components/ChatList'

export default function App() {
  return (
   <SafeAreaView>
    <ScrollView style={{backgroundColor:'#fff',padding:6}}>
        <AppHeader />
      <Stories />
    </ScrollView>
    <ScrollView style={{backgroundColor:'#fff',padding:6}}>
    <ChatList />
    </ScrollView>
     
   </SafeAreaView>
  )
}