import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const FavoriSpeakers = () => {
  const { ids } = useContext(AppContext)
    return (
    <View>
      <Text>{ids.length}</Text>
    </View>
  )
}

export default FavoriSpeakers

const styles = StyleSheet.create({})
