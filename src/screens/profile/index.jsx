import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
const ProfileTab = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=>navigation.navigate('Home')}>
        <View>
          <Text >Mis Datos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=>navigation.navigate('Orders')}>
        <View>
          <Text >Historial de Compras</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=>navigation.navigate('LocationNavigator')}>
        <View>
          <Text >Mis direcciones</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTab