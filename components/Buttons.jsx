import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native'

function Buttons( ) {
  const navigation = useNavigation()
  return (
  <View style={style.img2}>
    <TextInput autoCapitalize='words'placeholder='Username:' style={style.button}/>
    <TextInput autoCapitalize='words'placeholder='Password:' style={style.button}/>
    <TouchableOpacity style={style.confirm} onPress={() => navigation.navigate('Oi') }>
      <Text style={style.textConfirm}>To Enter</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Buttons

const style = StyleSheet.create({
    img2:{

      position: 'absolute',
      bottom: '10%',
      alignItems: 'center',
      left: '15%',
      gap: 20,
      
    },
    button:{
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 20,
      width: 350,
      height: 70,
      paddingLeft: 10,
      backgroundColor: '#E4EA9E'
    },
    confirm:{
      
      borderRadius: 20,
      width: 350,
      height: 70,
      paddingLeft: 10,
      backgroundColor: '#A8DD00'
    },
    textConfirm:{
      textAlign: 'center',
      paddingTop: 23,
      color: "#000",
      
    }
})
