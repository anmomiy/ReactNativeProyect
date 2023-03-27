import { Button, Text, Image } from 'react-native';

import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/index';
import { Card } from '../../components';
import { colors } from '../../constants';
const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={product.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.extra}>{product.extra}</Text>
      <Text style={styles.price}>S/{product.price}</Text>
      <Button title="Agregar" onPress={onAddToCart} color={colors.primary} />
    </Card>
  );
};

export default ProductDetail