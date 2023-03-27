import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={item.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;