import { StyleSheet } from "react-native";
import {fontSize} from"../../constants"
import { colors } from "../../constants";

export const styles = StyleSheet.create({
contentContainer: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 10,
    margin: 15,

    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },


title:{
    alignSelf: "center",
    fontSize: fontSize.large,
    fontFamily:"Nunito-Black",
    color: colors.white,
},
subtitle:{
  alignSelf: "center",
  fontSize: fontSize.small,
  fontFamily:"Nunito-Medium",
  color: colors.white,
  textAlign: "center"
}
});