import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { colors } from '../../constants';
import { formatDate } from '../../utils/index';

const OrderItem = ({ item }) => {
  return (
    <View style={styles.container} >
      <View style={styles.headerContainer}>
        <Text style={styles.date}>Fecha: {formatDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>Productos:</Text>
          {item.items.map((e)=>{return (<Text style={styles.items}>- {e.title}</Text>)})}
          <Text style={styles.total}>Total: S/{item.total}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
