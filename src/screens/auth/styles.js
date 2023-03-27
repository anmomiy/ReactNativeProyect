import { StyleSheet } from 'react-native';

import { colors, fontSize } from '../../constants';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    minHeight: 330,
  },
  title: {
    fontSize: fontSize.large,
    fontFamily: 'Nunito-Medium',
    textAlign: 'center',
  },
  label: {
    fontSize: fontSize.small,
    fontFamily: 'Nunito-Regular',
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: fontSize.small,
    fontFamily: 'Nunito-Medium',
    color: colors.text,
  },
});
