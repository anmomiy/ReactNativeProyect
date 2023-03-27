import { StyleSheet } from 'react-native';

import { colors } from "../../constants";
import { fontSize} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.background,
  },
  description: {
    fontSize: fontSize.Small,
    fontFamily:"Nunito-SemiBold",
    lineHeight: 40,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily:"Nunito-Bold",
    lineHeight: 40,
  },
  price: {
    fontSize: fontSize.small,
    fontFamily:"Nunito-Black",
    lineHeight: 40,
  },
  extra: {
    fontSize: fontSize.extraSmall,
    fontFamily:"Nunito-Regular",
    lineHeight: 40,
  },
  image:{
    width: '100%',
    height: 300,
    backgroundColor: colors.white,
    padding: 20,
  }
});