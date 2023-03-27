import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius:15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },

});