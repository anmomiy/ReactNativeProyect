import { StyleSheet } from "react-native";

import {colors} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 320,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.text,
    textAlign: "center",
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  map: {
    height: 220,
  },
});