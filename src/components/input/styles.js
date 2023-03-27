import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Nunito-Regular',
    marginBottom: 10,

  },
  message: {
    marginTop: 15,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: colors.black,
    marginTop: 10,
  },
});