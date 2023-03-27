import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';

import { styles } from './styles';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{item.title}</Text> 
            <Text style={styles.price}>S/{item.price}</Text>
            <Text style={styles.quantity}>qty: {item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons
                name={'md-trash-outline'}
                size={28}
                color={colors.black}
          />
          </TouchableOpacity>

    </View>
  );
};

export default CartItem;