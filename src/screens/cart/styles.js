import { StyleSheet } from 'react-native';

import { colors } from "../../constants";
import { fontSize} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    
  },
  listContainer:{

  },
  header:{
    margin: 20,

  },
  headerTitle:{
    fontFamily: 'Nunito-Medium',
    fontSize: fontSize.large,
    textAlign: 'center'
  },
  footer:{
    margin: 20,
  },
  buttonConfirm:{
    width: '90%',

  },
  buttonConfirmText:{
    fontFamily: 'Nunito-Bold',
    fontSize: fontSize.large,
    textAlign: 'center', 
    marginVertical: 10,
  },
  totalContainer:{
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'center'
  },
  totalText:{
    fontFamily: 'Nunito-Medium',
    fontSize: fontSize.medium,
    textAlign: 'center'
  },
  totalPrice:{
    fontFamily: 'Nunito-Medium',
    fontSize: fontSize.medium,
    textAlign: 'center'
  }
});