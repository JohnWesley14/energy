import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

function Buttons() {
  return (
  <View style={style.img2}>
    <TouchableOpacity>
        <Text>Aaaaa</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Buttons

const style = StyleSheet.create({
    img2:{
        position: 'absolute',
        bottom: '55%',
        height: 100,
        width: '90%',
        left: '5%',
        zIndex: 99,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#FFF",
        justifyContent: 'center'
      },
})
