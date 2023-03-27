import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=> navigation.navigate('Categories')}>
          <Text style={styles.title}>Iniciar Compras</Text>
      </TouchableOpacity>

    </View>
  );
};
      /*<TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=> navigation.navigate('Categories')}>
          <Text style={styles.title}>Pedido Especial</Text>
          <Text style={styles.subtitle}>¿Deseas traer algún producto de Japón? Haz el pedido aquí</Text>
      </TouchableOpacity>*/
export default Home;