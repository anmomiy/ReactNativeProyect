import { StyleSheet } from "react-native";
import {fontSize} from"../../constants"
import { colors } from "../../constants";

export const styles = StyleSheet.create({
contentContainer: {
    backgroundColor: colors.background,
    padding: 15,
    borderRadius: 10,
    margin: 15,
    width: 160,
    height: 160,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },

image: {
    width:90,
    height:90,
    alignSelf: "center",
},
title:{
    alignSelf: "center",
    fontSize: fontSize.medium,
    fontFamily:"Nunito-Bold"
}

});