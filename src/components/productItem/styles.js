import { StyleSheet } from 'react-native';

import { colors } from "../../constants";
import { fontSize} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.extra,
    maxWidth: '50%'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily:"Nunito-Bold",
    minHeight: 60,
    alignSelf: 'center', 
    textAlignVertical: 'center'
  },
  price: {
    fontSize: fontSize.small,
    fontFamily:"Nunito-Regular",
    height: 40,
    textAlignVertical: 'center'
  },
  extra: {
    fontSize: fontSize.extraSmall,
    fontFamily:"Nunito-Regular",
    height: 40,
    textAlignVertical: 'center'
  },
  image: {
    width:140,
    height:140,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: colors.white
  },
});