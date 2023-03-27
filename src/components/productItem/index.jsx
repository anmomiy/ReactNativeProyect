import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.extra}>{item.extra}</Text>  
        <Text style={styles.price}>S/{item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;