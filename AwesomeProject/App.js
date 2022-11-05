import { Button, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ScreenOrientation from 'expo-screen-orientation';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

const App = () => {
 //获取屏幕宽高
  const { w, h } = Dimensions.get('window')

  async function changeScreenOrientation() {
    ScreenOrientation.addOrientationChangeListener((event) => {
      console.log(event)
    })
  }
  changeScreenOrientation()

  return (
    <View style={{
      backgroundColor: '#fff',
      display: 'flex',
      position: 'relative',
      top: 258,
      left: -260,
      transform: [{ rotate: '90deg' }],
      width: 942,
      height: 425,
      borderColor: '#000',
      borderWidth: 1,
    }}>
      <StatusBar hidden={true} />
    <WebView source={{ uri: 'https://www.baidu.com' }} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#faf',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   //整体旋转90度
  //   transform: [{ rotate: '90deg' }],
  //   width:height,
  //   height:width,
  // }
})