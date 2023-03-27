import { StyleSheet } from 'react-native';

import { colors } from "../../constants";
import { fontSize} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.extra,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily:"Nunito-Bold"
  },
  price: {
    fontSize: fontSize.small,
    fontFamily:"Nunito-Regular"
  },
});